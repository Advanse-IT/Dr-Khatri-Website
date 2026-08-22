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
        <title>Admin Dashboard</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '48px 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
          <h1>Blog Posts</h1>
          <div style={{ display: 'flex', gap: 12 }}>
            <Link to="/admin/posts/new" style={{ padding: '10px 16px', background: '#0a5c3f', color: '#fff', borderRadius: 6, textDecoration: 'none' }}>
              + New Post
            </Link>
            <button onClick={handleLogout} style={{ padding: '10px 16px', borderRadius: 6, border: '1px solid #ddd', background: '#fff', cursor: 'pointer' }}>
              Log out
            </button>
          </div>
        </div>

        {loading && <p>Loading…</p>}
        {!loading && posts.length === 0 && <p>No posts yet. Create your first one.</p>}

        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ textAlign: 'left', borderBottom: '2px solid #eee' }}>
              <th style={{ padding: '12px 8px' }}>Title</th>
              <th style={{ padding: '12px 8px' }}>Status</th>
              <th style={{ padding: '12px 8px' }}>Updated</th>
              <th style={{ padding: '12px 8px' }}></th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id} style={{ borderBottom: '1px solid #f0f0f0' }}>
                <td style={{ padding: '12px 8px' }}>{post.title}</td>
                <td style={{ padding: '12px 8px' }}>
                  <span style={{
                    padding: '2px 10px', borderRadius: 12, fontSize: 12,
                    background: post.status === 'published' ? '#e3f5ec' : '#f0f0f0',
                    color: post.status === 'published' ? '#0a5c3f' : '#777',
                  }}>
                    {post.status}
                  </span>
                </td>
                <td style={{ padding: '12px 8px', color: '#888', fontSize: 14 }}>{formatDate(post.updated_at)}</td>
                <td style={{ padding: '12px 8px', textAlign: 'right' }}>
                  <Link to={`/admin/posts/${post.id}/edit`} style={{ marginRight: 16 }}>Edit</Link>
                  <button onClick={() => handleDelete(post.id, post.title)} style={{ color: '#c00', background: 'none', border: 'none', cursor: 'pointer' }}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
