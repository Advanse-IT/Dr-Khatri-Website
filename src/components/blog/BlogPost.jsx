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

  const html = DOMPurify.sanitize(marked.parse(post.content || ''));

  return (
    <>
      <Helmet>
        <title>{post.title} | Dr Shailesh Khatri</title>
        <meta name="description" content={post.excerpt || post.title} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt || ''} />
        {post.cover_image && <meta property="og:image" content={post.cover_image} />}
        <meta property="og:url" content={`https://drskhatri.com.au/blog/${post.slug}`} />
        <link rel="canonical" href={`https://drskhatri.com.au/blog/${post.slug}`} />
      </Helmet>
      <Header />
      <main style={{ maxWidth: 760, margin: '0 auto', padding: '120px 24px 80px' }}>
        <p style={{ marginBottom: 16 }}><Link to="/blog">← Back to blog</Link></p>
        {post.cover_image && (
          <img src={post.cover_image} alt={post.title} style={{ width: '100%', borderRadius: 8, marginBottom: 24 }} />
        )}
        <h1 style={{ marginBottom: 8 }}>{post.title}</h1>
        <p style={{ color: '#888', fontSize: 14, marginBottom: 32 }}>{formatDate(post.published_at)}</p>
        <div className="blog-content" dangerouslySetInnerHTML={{ __html: html }} />
      </main>
      <Footer />
      <MobileBottomBar />
    </>
  );
}
