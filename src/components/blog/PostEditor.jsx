import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

export default function PostEditor() {
  const { id } = useParams();
  const isEditing = Boolean(id);
  const navigate = useNavigate();

  const [checkingAuth, setCheckingAuth] = useState(true);
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [status, setStatus] = useState('draft');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [slugTouched, setSlugTouched] = useState(false);

  useEffect(() => {
    fetch('/api/auth/me', { credentials: 'include' })
      .then((res) => res.json())
      .then((data) => {
        if (!data.authenticated) {
          navigate('/admin/login');
          return;
        }
        setCheckingAuth(false);
        if (isEditing) loadPost();
      });
  }, [id]);

  function loadPost() {
    fetch(`/api/admin/posts/${id}`, { credentials: 'include' })
      .then((res) => res.json())
      .then((data) => {
        if (!data.post) return;
        setTitle(data.post.title);
        setSlug(data.post.slug);
        setExcerpt(data.post.excerpt || '');
        setContent(data.post.content);
        setCoverImage(data.post.cover_image || '');
        setStatus(data.post.status);
        setSlugTouched(true);
      });
  }

  function handleTitleChange(value) {
    setTitle(value);
    if (!slugTouched) {
      setSlug(value.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-'));
    }
  }

  async function handleSave(publishStatus) {
    setSaving(true);
    setError(null);
    const payload = { title, slug, excerpt, content, cover_image: coverImage, status: publishStatus };

    try {
      const res = await fetch(isEditing ? `/api/admin/posts/${id}` : '/api/admin/posts', {
        method: isEditing ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || 'Save failed');
        setSaving(false);
        return;
      }
      navigate('/admin');
    } catch {
      setError('Something went wrong. Try again.');
      setSaving(false);
    }
  }

  if (checkingAuth) return null;

  const previewHtml = DOMPurify.sanitize(marked.parse(content || ''));

  return (
    <>
      <Helmet>
        <title>{isEditing ? 'Edit Post' : 'New Post'}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '48px 24px' }}>
        <h1 style={{ marginBottom: 24 }}>{isEditing ? 'Edit Post' : 'New Post'}</h1>
        {error && <p style={{ color: '#c00', marginBottom: 16 }}>{error}</p>}

        <label style={{ display: 'block', marginBottom: 16 }}>
          <span style={{ display: 'block', marginBottom: 6, fontSize: 14 }}>Title</span>
          <input value={title} onChange={(e) => handleTitleChange(e.target.value)} required
            style={{ width: '100%', padding: '10px 12px', borderRadius: 6, border: '1px solid #ddd' }} />
        </label>

        <label style={{ display: 'block', marginBottom: 16 }}>
          <span style={{ display: 'block', marginBottom: 6, fontSize: 14 }}>Slug (URL)</span>
          <input value={slug} onChange={(e) => { setSlug(e.target.value); setSlugTouched(true); }}
            style={{ width: '100%', padding: '10px 12px', borderRadius: 6, border: '1px solid #ddd' }} />
        </label>

        <label style={{ display: 'block', marginBottom: 16 }}>
          <span style={{ display: 'block', marginBottom: 6, fontSize: 14 }}>Cover image URL (optional)</span>
          <input value={coverImage} onChange={(e) => setCoverImage(e.target.value)} placeholder="https://..."
            style={{ width: '100%', padding: '10px 12px', borderRadius: 6, border: '1px solid #ddd' }} />
        </label>

        <label style={{ display: 'block', marginBottom: 16 }}>
          <span style={{ display: 'block', marginBottom: 6, fontSize: 14 }}>Excerpt (short summary for the blog list)</span>
          <textarea value={excerpt} onChange={(e) => setExcerpt(e.target.value)} rows={2}
            style={{ width: '100%', padding: '10px 12px', borderRadius: 6, border: '1px solid #ddd', fontFamily: 'inherit' }} />
        </label>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 24 }}>
          <label style={{ display: 'block' }}>
            <span style={{ display: 'block', marginBottom: 6, fontSize: 14 }}>Content (Markdown)</span>
            <textarea value={content} onChange={(e) => setContent(e.target.value)} rows={20} required
              style={{ width: '100%', padding: '10px 12px', borderRadius: 6, border: '1px solid #ddd', fontFamily: 'monospace', fontSize: 14 }} />
          </label>
          <div>
            <span style={{ display: 'block', marginBottom: 6, fontSize: 14 }}>Preview</span>
            <div
              style={{ border: '1px solid #eee', borderRadius: 6, padding: 16, height: 'calc(100% - 22px)', overflowY: 'auto' }}
              dangerouslySetInnerHTML={{ __html: previewHtml }}
            />
          </div>
        </div>

        <div style={{ display: 'flex', gap: 12 }}>
          <button onClick={() => handleSave('draft')} disabled={saving || !title || !content}
            style={{ padding: '12px 20px', borderRadius: 6, border: '1px solid #ddd', background: '#fff', cursor: 'pointer' }}>
            Save Draft
          </button>
          <button onClick={() => handleSave('published')} disabled={saving || !title || !content}
            style={{ padding: '12px 20px', borderRadius: 6, border: 'none', background: '#0a5c3f', color: '#fff', fontWeight: 600, cursor: 'pointer' }}>
            {status === 'published' ? 'Update & Keep Published' : 'Publish'}
          </button>
          <button onClick={() => navigate('/admin')}
            style={{ padding: '12px 20px', borderRadius: 6, border: 'none', background: 'transparent', cursor: 'pointer' }}>
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}
