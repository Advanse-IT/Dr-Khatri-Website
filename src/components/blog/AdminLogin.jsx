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
        <title>Admin Login | Dr Shailesh Khatri</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--hero-bg)',
        backgroundImage: 'radial-gradient(circle at 15% 15%, rgba(196,154,56,.08) 0%, transparent 45%)',
        padding: 24,
      }}>
        <div style={{ width: '100%', maxWidth: 400 }}>
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <span style={{ display: 'block', fontSize: '1.05rem', fontWeight: 800, color: '#fff', letterSpacing: '-.02em' }}>
              Dr Shailesh Khatri
            </span>
            <span style={{ display: 'block', fontSize: '.62rem', color: 'rgba(255,255,255,.45)', letterSpacing: '.13em', textTransform: 'uppercase', marginTop: 4 }}>
              Interventional Cardiologist · Gold Coast
            </span>
          </div>

          <form onSubmit={handleSubmit} style={{ background: '#fff', padding: '36px 32px', borderRadius: 10, boxShadow: '0 24px 60px rgba(0,0,0,.35)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
              <span style={{ width: 22, height: 2, background: 'var(--gold)', flexShrink: 0 }} />
              <span style={{ fontSize: '.72rem', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                Blog Admin
              </span>
            </div>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--navy)', letterSpacing: '-.02em', margin: '6px 0 24px' }}>
              Sign in
            </h1>

            {error && (
              <div style={{ marginBottom: 18, padding: '10px 14px', background: '#fdf1f1', border: '1px solid #f3d4d4', borderRadius: 6, color: '#b83232', fontSize: '.87rem' }}>
                {error}
              </div>
            )}

            <label style={{ display: 'block', marginBottom: 16 }}>
              <span style={{ display: 'block', marginBottom: 6, fontSize: '.82rem', fontWeight: 600, color: 'var(--text2)' }}>Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoFocus
                style={{ width: '100%', padding: '11px 14px', borderRadius: 7, border: '1px solid var(--border)', fontSize: '.92rem', fontFamily: 'inherit', color: 'var(--text)' }}
              />
            </label>
            <label style={{ display: 'block', marginBottom: 24 }}>
              <span style={{ display: 'block', marginBottom: 6, fontSize: '.82rem', fontWeight: 600, color: 'var(--text2)' }}>Password</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ width: '100%', padding: '11px 14px', borderRadius: 7, border: '1px solid var(--border)', fontSize: '.92rem', fontFamily: 'inherit', color: 'var(--text)' }}
              />
            </label>
            <button type="submit" disabled={submitting} className="btn btn-gold" style={{ width: '100%' }}>
              {submitting ? 'Logging in…' : 'Log in'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
