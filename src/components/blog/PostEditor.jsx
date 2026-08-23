import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import RichTextEditor from './RichTextEditor.jsx';

function slugify(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export default function PostEditor() {
  const { id } = useParams();
  const isEditing = Boolean(id);
  const navigate = useNavigate();

  const [checkingAuth, setCheckingAuth] = useState(true);
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [slugTouched, setSlugTouched] = useState(false);
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [tagsInput, setTagsInput] = useState('');
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [status, setStatus] = useState('draft');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

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
        setSlugTouched(true);
        setExcerpt(data.post.excerpt || '');
        setContent(data.post.content);
        setCoverImage(data.post.cover_image || '');
        setTagsInput((data.post.tags ? JSON.parse(data.post.tags) : []).join(', '));
        setMetaTitle(data.post.meta_title || '');
        setMetaDescription(data.post.meta_description || '');
        setStatus(data.post.status);
      });
  }

  function handleTitleChange(value) {
    setTitle(value);
    if (!slugTouched) setSlug(slugify(value));
  }

  async function handleSave(publishStatus) {
    setSaving(true);
    setError(null);
    const tags = tagsInput.split(',').map((t) => t.trim()).filter(Boolean);
    const payload = {
      title, slug, excerpt, content,
      cover_image: coverImage,
      tags,
      meta_title: metaTitle,
      meta_description: metaDescription,
      status: publishStatus,
    };

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

  const labelStyle = { display: 'block', marginBottom: 6, fontSize: 14, fontWeight: 600, color: '#333' };
  const inputStyle = { width: '100%', padding: '10px 12px', borderRadius: 6, border: '1px solid #ddd', fontFamily: 'inherit', fontSize: 14 };
  const cardStyle = { background: '#fff', border: '1px solid #eee', borderRadius: 10, padding: 20, marginBottom: 20 };

  return (
    <>
      <Helmet>
        <title>{isEditing ? 'Edit Post' : 'New Post'}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 24px' }}>
        <h1 style={{ marginBottom: 24 }}>{isEditing ? 'Edit Post' : 'New Post'}</h1>
        {error && <p style={{ color: '#c00', marginBottom: 16 }}>{error}</p>}

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 24, alignItems: 'start' }}>
          {/* Main content column */}
          <div>
            <div style={cardStyle}>
              <label style={{ display: 'block', marginBottom: 16 }}>
                <span style={labelStyle}>Title</span>
                <input value={title} onChange={(e) => handleTitleChange(e.target.value)} required style={inputStyle} />
              </label>

              <label style={{ display: 'block', marginBottom: 16 }}>
                <span style={labelStyle}>URL Slug / Permalink</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ color: '#999', fontSize: 14, whiteSpace: 'nowrap' }}>/blog/</span>
                  <input
                    value={slug}
                    onChange={(e) => { setSlug(slugify(e.target.value)); setSlugTouched(true); }}
                    style={inputStyle}
                  />
                </div>
              </label>

              <label style={{ display: 'block' }}>
                <span style={labelStyle}>Excerpt (short summary for the blog list)</span>
                <textarea value={excerpt} onChange={(e) => setExcerpt(e.target.value)} rows={2}
                  style={{ ...inputStyle, fontFamily: 'inherit' }} />
              </label>
            </div>

            <div>
              <span style={{ ...labelStyle, marginBottom: 8 }}>Content</span>
              <RichTextEditor content={content} onChange={setContent} />
            </div>
          </div>

          {/* Sidebar column */}
          <div>
            <div style={cardStyle}>
              <h3 style={{ fontSize: 14, marginBottom: 16 }}>Tags / Keywords</h3>
              <label style={{ display: 'block' }}>
                <span style={labelStyle}>Comma-separated</span>
                <input value={tagsInput} onChange={(e) => setTagsInput(e.target.value)} placeholder="Heart Health, Prevention" style={inputStyle} />
              </label>
            </div>

            <div style={cardStyle}>
              <h3 style={{ fontSize: 14, marginBottom: 16 }}>Featured Image</h3>
              <label style={{ display: 'block', marginBottom: coverImage ? 12 : 0 }}>
                <span style={labelStyle}>Image URL</span>
                <input value={coverImage} onChange={(e) => setCoverImage(e.target.value)} placeholder="https://..." style={inputStyle} />
              </label>
              {coverImage && (
                <img src={coverImage} alt="Featured preview" style={{ width: '100%', height: 130, objectFit: 'cover', borderRadius: 6, border: '1px solid #eee' }} />
              )}
            </div>

            <div style={cardStyle}>
              <h3 style={{ fontSize: 14, marginBottom: 16 }}>SEO</h3>
              <label style={{ display: 'block', marginBottom: 16 }}>
                <span style={labelStyle}>Meta Title</span>
                <input
                  value={metaTitle}
                  onChange={(e) => setMetaTitle(e.target.value)}
                  placeholder={title || 'Defaults to the post title'}
                  style={inputStyle}
                />
                <p style={{ fontSize: 12, color: '#999', marginTop: 4 }}>{(metaTitle || title).length}/60 characters (recommended)</p>
              </label>
              <label style={{ display: 'block' }}>
                <span style={labelStyle}>Meta Description</span>
                <textarea value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)} rows={3}
                  style={{ ...inputStyle, fontFamily: 'inherit' }} />
                <p style={{ fontSize: 12, color: '#999', marginTop: 4 }}>{metaDescription.length}/160 characters (recommended)</p>
              </label>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
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
