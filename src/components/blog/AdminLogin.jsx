import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || 'Login failed');
        setSubmitting(false);
        return;
      }
      navigate('/admin');
    } catch {
      setError('Something went wrong. Try again.');
      setSubmitting(false);
    }
  }

  return (
    <>
      <Helmet>
        <title>Admin Login</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f7f7f7' }}>
        <form onSubmit={handleSubmit} style={{ background: '#fff', padding: 40, borderRadius: 12, width: 360, boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}>
          <h1 style={{ fontSize: 22, marginBottom: 24 }}>Admin Login</h1>
          {error && <p style={{ color: '#c00', marginBottom: 16 }}>{error}</p>}
          <label style={{ display: 'block', marginBottom: 16 }}>
            <span style={{ display: 'block', marginBottom: 6, fontSize: 14 }}>Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: '100%', padding: '10px 12px', borderRadius: 6, border: '1px solid #ddd' }}
            />
          </label>
          <label style={{ display: 'block', marginBottom: 24 }}>
            <span style={{ display: 'block', marginBottom: 6, fontSize: 14 }}>Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: '100%', padding: '10px 12px', borderRadius: 6, border: '1px solid #ddd' }}
            />
          </label>
          <button
            type="submit"
            disabled={submitting}
            style={{ width: '100%', padding: '12px', borderRadius: 6, border: 'none', background: '#0a5c3f', color: '#fff', fontWeight: 600, cursor: 'pointer' }}
          >
            {submitting ? 'Logging in…' : 'Log in'}
          </button>
        </form>
      </div>
    </>
  );
}
