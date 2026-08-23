import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function formatDate(iso) {
  if (!iso) return '—';
  return new Date(iso).toLocaleDateString('en-AU', { year: 'numeric', month: 'short', day: 'numeric' });
}

export default function AdminDashboard() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/api/auth/me', { credentials: 'include' })
      .then((res) => res.json())
      .then((data) => {
        if (!data.authenticated) {
          navigate('/admin/login');
          return;
        }
        setCheckingAuth(false);
        loadPosts();
      });
  }, []);

  function loadPosts() {
    setLoading(true);
    fetch('/api/admin/posts', { credentials: 'include' })
      .then((res) => res.json())
      .then((data) => setPosts(data.posts || []))
      .finally(() => setLoading(false));
  }

  async function handleDelete(id, title) {
    if (!confirm(`Delete "${title}"? This can't be undone.`)) return;
    await fetch(`/api/admin/posts/${id}`, { method: 'DELETE', credentials: 'include' });
    loadPosts();
  }

  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST', credentials: 'include' });
    navigate('/admin/login');
  }

  if (checkingAuth) return null;

  return (
    <>
      <Helmet>
        <title>Blog Admin | Dr Shailesh Khatri</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
        <div style={{ background: 'var(--navy)', padding: '26px 0' }}>
          <div style={{ maxWidth: 1040, margin: '0 auto', padding: '0 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                <span style={{ width: 20, height: 2, background: 'var(--gold)', flexShrink: 0 }} />
                <span style={{ fontSize: '.68rem', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                  Blog Admin
                </span>
              </div>
              <h1 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', letterSpacing: '-.02em', margin: 0 }}>
                Posts
              </h1>
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <Link to="/admin/posts/new" className="btn btn-gold" style={{ padding: '11px 20px', fontSize: '.85rem', minHeight: 42 }}>
                + New Post
              </Link>
              <button onClick={handleLogout} className="btn btn-ghost" style={{ padding: '11px 20px', fontSize: '.85rem', minHeight: 42 }}>
                Log out
              </button>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: 1040, margin: '0 auto', padding: '40px 28px 80px' }}>
          {loading && <p style={{ color: 'var(--text3)' }}>Loading…</p>}
          {!loading && posts.length === 0 && (
            <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 8, padding: '48px 24px', textAlign: 'center', color: 'var(--text3)' }}>
              No posts yet. Create your first one.
            </div>
          )}

          {!loading && posts.length > 0 && (
            <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 8, overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.9rem' }}>
                <thead>
                  <tr style={{ textAlign: 'left', background: 'var(--bg2)', borderBottom: '1px solid var(--border)' }}>
                    <th style={{ padding: '13px 18px', fontSize: '.72rem', fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--text3)' }}>Title</th>
                    <th style={{ padding: '13px 18px', fontSize: '.72rem', fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--text3)' }}>Status</th>
                    <th style={{ padding: '13px 18px', fontSize: '.72rem', fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--text3)' }}>Updated</th>
                    <th style={{ padding: '13px 18px' }}></th>
                  </tr>
                </thead>
                <tbody>
                  {posts.map((post) => (
                    <tr key={post.id} style={{ borderBottom: '1px solid var(--bg2)' }}>
                      <td style={{ padding: '14px 18px', fontWeight: 600, color: 'var(--navy)' }}>{post.title}</td>
                      <td style={{ padding: '14px 18px' }}>
                        <span style={{
                          padding: '3px 11px', borderRadius: 20, fontSize: '.72rem', fontWeight: 700,
                          background: post.status === 'published' ? 'rgba(196,154,56,.14)' : 'var(--bg2)',
                          color: post.status === 'published' ? '#9c7a20' : 'var(--text3)',
                        }}>
                          {post.status}
                        </span>
                      </td>
                      <td style={{ padding: '14px 18px', color: 'var(--text3)' }}>{formatDate(post.updated_at)}</td>
                      <td style={{ padding: '14px 18px', textAlign: 'right' }}>
                        <Link to={`/admin/posts/${post.id}/edit`} style={{ marginRight: 18, color: 'var(--navy2)', fontWeight: 600 }}>Edit</Link>
                        <button onClick={() => handleDelete(post.id, post.title)} style={{ color: '#b83232', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600, fontFamily: 'inherit', fontSize: 'inherit' }}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
