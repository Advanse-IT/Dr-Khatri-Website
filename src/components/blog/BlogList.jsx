import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';
import MobileBottomBar from '../MobileBottomBar.jsx';
import DirectionsPicker from '../DirectionsPicker.jsx';
import useSiteEffects from '../../hooks/useSiteEffects.js';

function formatDate(iso) {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function BlogList() {
  useSiteEffects();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    // This page has no dark hero behind the nav, so the nav must stay in its
    // solid/scrolled ("up") state at all times -- see the identical pattern
    // and explanation in LeaveReviewPage (src/App.jsx).
    const nav = document.getElementById('nav');
    const forceNavSolid = () => nav?.classList.add('up');
    forceNavSolid();
    window.addEventListener('scroll', forceNavSolid, { passive: true });
    return () => window.removeEventListener('scroll', forceNavSolid);
  }, []);

  useEffect(() => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data.posts || []))
      .catch(() => setError('Unable to load posts right now.'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Helmet>
        <title>Blog | Dr Shailesh Khatri | Gold Coast Cardiologist</title>
        <meta name="description" content="Heart health articles, patient guidance, and updates from Dr Shailesh Khatri, Senior Interventional Cardiologist on the Gold Coast." />
        <link rel="canonical" href="https://drskhatri.com.au/blog" />
      </Helmet>
      <Header />
      <main style={{ background: 'var(--bg)', minHeight: '70vh' }}>
        <div className="wrap" style={{ maxWidth: 900, padding: '150px 28px 90px' }}>
          <div className="kicker">Insights</div>
          <h1 style={{ fontSize: 'clamp(2rem,4vw,2.7rem)', fontWeight: 800, color: 'var(--navy)', lineHeight: 1.12, letterSpacing: '-.03em', marginBottom: 16 }}>Blog</h1>
          <p className="sec-lead" style={{ marginBottom: 48 }}>
            Heart health articles and updates from Dr Khatri's practice.
          </p>

          {loading && <p style={{ color: 'var(--text3)' }}>Loading posts…</p>}
          {error && <p style={{ color: '#b83232' }}>{error}</p>}
          {!loading && !error && posts.length === 0 && (
            <p style={{ color: 'var(--text3)' }}>No posts published yet — check back soon.</p>
          )}

          <div style={{ display: 'grid', gap: 24 }}>
            {posts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                style={{
                  display: 'grid',
                  gridTemplateColumns: post.cover_image ? '220px 1fr' : '1fr',
                  gap: 24,
                  background: '#fff',
                  border: '1px solid var(--border)',
                  borderRadius: 8,
                  padding: 20,
                  transition: 'all .25s',
                }}
                className="blog-card"
              >
                {post.cover_image && (
                  <img
                    src={post.cover_image}
                    alt={post.title}
                    style={{ width: '100%', height: 140, objectFit: 'cover', borderRadius: 6 }}
                  />
                )}
                <div>
                  {post.tags?.length > 0 && (
                    <div style={{ display: 'flex', gap: 6, marginBottom: 10 }}>
                      {post.tags.slice(0, 2).map((tag) => (
                        <span key={tag} style={{ fontSize: '.65rem', fontWeight: 700, letterSpacing: '.04em', textTransform: 'uppercase', color: 'var(--gold2)' }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--navy)', letterSpacing: '-.02em', marginBottom: 8, lineHeight: 1.3 }}>
                    {post.title}
                  </h2>
                  <p style={{ color: 'var(--text3)', fontSize: '.78rem', marginBottom: 10 }}>{formatDate(post.published_at)}</p>
                  {post.excerpt && <p style={{ color: 'var(--text2)', fontSize: '.92rem', lineHeight: 1.6 }}>{post.excerpt}</p>}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <style>{`
        .blog-card:hover { box-shadow: 0 12px 36px rgba(0,0,0,.09); transform: translateY(-2px); border-color: rgba(196,154,56,.3); }
      `}</style>
      <Footer />
      <MobileBottomBar />
      <DirectionsPicker />
    </>
  );
}
