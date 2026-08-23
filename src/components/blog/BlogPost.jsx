import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';
import MobileBottomBar from '../MobileBottomBar.jsx';

function formatDate(iso) {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    setNotFound(false);
    fetch(`/api/posts/${slug}`)
      .then(async (res) => {
        if (res.status === 404) {
          setNotFound(true);
          return null;
        }
        return res.json();
      })
      .then((data) => data && setPost(data.post))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <>
        <Header />
        <main style={{ maxWidth: 760, margin: '0 auto', padding: '160px 24px 80px' }}>
          <p>Loading…</p>
        </main>
        <Footer />
        <MobileBottomBar />
      </>
    );
  }

  if (notFound || !post) {
    return (
      <>
        <Helmet>
          <meta name="robots" content="noindex" />
        </Helmet>
        <Header />
        <main style={{ maxWidth: 760, margin: '0 auto', padding: '160px 24px 80px' }}>
          <h1>Post not found</h1>
          <p><Link to="/blog">← Back to blog</Link></p>
        </main>
        <Footer />
        <MobileBottomBar />
      </>
    );
  }

  // New posts (rich text editor) store HTML; detect and sanitize directly.
  // Any future markdown-authored content still renders correctly via marked.
  const isHtmlContent = /^\s*</.test(post.content || '');
  const html = isHtmlContent
    ? DOMPurify.sanitize(post.content || '')
    : DOMPurify.sanitize(marked.parse(post.content || ''));
  const seoTitle = post.meta_title || post.title;
  const seoDescription = post.meta_description || post.excerpt || post.title;

  return (
    <>
      <Helmet>
        <title>{seoTitle} | Dr Shailesh Khatri</title>
        <meta name="description" content={seoDescription} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        {post.cover_image && <meta property="og:image" content={post.cover_image} />}
        <meta property="og:url" content={`https://drskhatri.com.au/blog/${post.slug}`} />
        <link rel="canonical" href={`https://drskhatri.com.au/blog/${post.slug}`} />
      </Helmet>
      <Header />
      <main style={{ background: 'var(--bg)' }}>
        <div className="wrap" style={{ maxWidth: 760, padding: '150px 28px 90px' }}>
          <p style={{ marginBottom: 24 }}>
            <Link to="/blog" style={{ color: 'var(--navy2)', fontWeight: 600, fontSize: '.88rem' }}>← Back to blog</Link>
          </p>
          {post.cover_image && (
            <img src={post.cover_image} alt={post.title} style={{ width: '100%', borderRadius: 8, marginBottom: 28 }} />
          )}
          <h1 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.5rem)', fontWeight: 800, color: 'var(--navy)', letterSpacing: '-.03em', lineHeight: 1.15, marginBottom: 12 }}>
            {post.title}
          </h1>
          <p style={{ color: 'var(--text3)', fontSize: '.85rem', marginBottom: post.tags?.length ? 14 : 36 }}>{formatDate(post.published_at)}</p>
          {post.tags?.length > 0 && (
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 36 }}>
              {post.tags.map((tag) => (
                <span key={tag} style={{ fontSize: '.68rem', fontWeight: 700, background: 'rgba(196,154,56,.12)', color: '#9c7a20', padding: '4px 12px', borderRadius: 999 }}>
                  {tag}
                </span>
              ))}
            </div>
          )}
          <div className="blog-content" style={{ color: 'var(--text2)', fontSize: '1.02rem', lineHeight: 1.85 }} dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </main>
      <style>{`
        .blog-content h1, .blog-content h2, .blog-content h3 { color: var(--navy); font-weight: 800; letter-spacing: -.02em; margin: 32px 0 14px; }
        .blog-content h2 { font-size: 1.5rem; }
        .blog-content h3 { font-size: 1.2rem; }
        .blog-content p { margin-bottom: 18px; }
        .blog-content a { color: var(--navy2); text-decoration: underline; }
        .blog-content strong { color: var(--navy); }
        .blog-content ul, .blog-content ol { margin: 0 0 18px 22px; }
        .blog-content li { margin-bottom: 8px; list-style: revert; }
        .blog-content blockquote { border-left: 3px solid var(--gold); padding-left: 18px; color: var(--text3); font-style: italic; margin: 24px 0; }
        .blog-content img { border-radius: 8px; margin: 24px 0; width: 100%; }
      `}</style>
      <Footer />
      <MobileBottomBar />
    </>
  );
}
