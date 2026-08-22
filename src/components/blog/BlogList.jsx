import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';
import MobileBottomBar from '../MobileBottomBar.jsx';

function formatDate(iso) {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function BlogList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
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
      <main style={{ maxWidth: 960, margin: '0 auto', padding: '120px 24px 80px' }}>
        <h1 style={{ marginBottom: 8 }}>Blog</h1>
        <p style={{ marginBottom: 40, color: '#666' }}>Heart health articles and updates from Dr Khatri's practice.</p>

        {loading && <p>Loading posts…</p>}
        {error && <p>{error}</p>}
        {!loading && !error && posts.length === 0 && <p>No posts published yet — check back soon.</p>}

        <div style={{ display: 'grid', gap: 32 }}>
          {posts.map((post) => (
            <article key={post.id} style={{ borderBottom: '1px solid #eee', paddingBottom: 32 }}>
              {post.cover_image && (
                <img
                  src={post.cover_image}
                  alt={post.title}
                  style={{ width: '100%', maxHeight: 320, objectFit: 'cover', borderRadius: 8, marginBottom: 16 }}
                />
              )}
              <h2 style={{ marginBottom: 8 }}>
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p style={{ color: '#888', fontSize: 14, marginBottom: 12 }}>{formatDate(post.published_at)}</p>
              {post.excerpt && <p style={{ color: '#444' }}>{post.excerpt}</p>}
              <Link to={`/blog/${post.slug}`} style={{ display: 'inline-block', marginTop: 12 }}>
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </main>
      <Footer />
      <MobileBottomBar />
    </>
  );
}
