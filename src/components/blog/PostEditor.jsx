import { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import RichTextEditor, { uploadImage } from './RichTextEditor.jsx';

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
  const [coverUploading, setCoverUploading] = useState(false);
  const coverFileInputRef = useRef(null);
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

  function triggerCoverUpload() {
    coverFileInputRef.current?.click();
  }

  async function handleCoverFileSelected(e) {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;

    setCoverUploading(true);
    try {
      const url = await uploadImage(file);
      setCoverImage(url);
    } catch (err) {
      window.alert(err.message || 'Image upload failed. Try again.');
    } finally {
      setCoverUploading(false);
    }
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

  const labelStyle = { display: 'block', marginBottom: 6, fontSize: '.82rem', fontWeight: 600, color: 'var(--text2)' };
  const inputStyle = { width: '100%', padding: '11px 14px', borderRadius: 7, border: '1px solid var(--border)', fontFamily: 'inherit', fontSize: '.9rem', color: 'var(--text)' };
  const cardStyle = { background: '#fff', border: '1px solid var(--border)', borderRadius: 8, padding: 22, marginBottom: 20 };
  const cardHeading = { fontSize: '.68rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 };

  return (
    <>
      <Helmet>
        <title>{isEditing ? 'Edit Post' : 'New Post'} | Dr Shailesh Khatri</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
        <div style={{ background: 'var(--navy)', padding: '22px 0' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 5 }}>
                <span style={{ width: 20, height: 2, background: 'var(--gold)', flexShrink: 0 }} />
                <span style={{ fontSize: '.66rem', fontWeight: 700, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                  Blog Admin
                </span>
              </div>
              <h1 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', letterSpacing: '-.02em', margin: 0 }}>
                {isEditing ? 'Edit Post' : 'New Post'}
              </h1>
            </div>
            <Link to="/admin" style={{ color: 'rgba(255,255,255,.65)', fontSize: '.85rem', fontWeight: 600 }}>← Back to posts</Link>
          </div>
        </div>

        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 28px 80px' }}>
          {error && (
            <div style={{ marginBottom: 20, padding: '10px 14px', background: '#fdf1f1', border: '1px solid #f3d4d4', borderRadius: 6, color: '#b83232', fontSize: '.87rem' }}>
              {error}
            </div>
          )}

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
                    <span style={{ color: 'var(--text3)', fontSize: '.9rem', whiteSpace: 'nowrap' }}>/blog/</span>
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
                <h3 style={cardHeading}>Tags / Keywords</h3>
                <label style={{ display: 'block' }}>
                  <span style={labelStyle}>Comma-separated</span>
                  <input value={tagsInput} onChange={(e) => setTagsInput(e.target.value)} placeholder="Heart Health, Prevention" style={inputStyle} />
                </label>
              </div>

              <div style={cardStyle}>
                <h3 style={cardHeading}>Featured Image</h3>
                <input
                  ref={coverFileInputRef}
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/gif"
                  style={{ display: 'none' }}
                  onChange={handleCoverFileSelected}
                />
                <button
                  type="button"
                  onClick={triggerCoverUpload}
                  disabled={coverUploading}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: 7, border: '1.5px dashed var(--border)', background: 'var(--bg)', color: 'var(--navy2)', fontWeight: 600, fontSize: '.85rem', cursor: coverUploading ? 'not-allowed' : 'pointer', marginBottom: 12 }}
                >
                  {coverUploading ? 'Uploading…' : '⬆ Upload Image'}
                </button>
                <label style={{ display: 'block', marginBottom: coverImage ? 12 : 0 }}>
                  <span style={labelStyle}>or paste an Image URL</span>
                  <input value={coverImage} onChange={(e) => setCoverImage(e.target.value)} placeholder="https://..." style={inputStyle} />
                </label>
                {coverImage && (
                  <img src={coverImage} alt="Featured preview" style={{ width: '100%', height: 130, objectFit: 'cover', borderRadius: 6, border: '1px solid var(--border)' }} />
                )}
              </div>

              <div style={cardStyle}>
                <h3 style={cardHeading}>SEO</h3>
                <label style={{ display: 'block', marginBottom: 16 }}>
                  <span style={labelStyle}>Meta Title</span>
                  <input
                    value={metaTitle}
                    onChange={(e) => setMetaTitle(e.target.value)}
                    placeholder={title || 'Defaults to the post title'}
                    style={inputStyle}
                  />
                  <p style={{ fontSize: '.72rem', color: 'var(--text3)', marginTop: 4 }}>{(metaTitle || title).length}/60 characters (recommended)</p>
                </label>
                <label style={{ display: 'block' }}>
                  <span style={labelStyle}>Meta Description</span>
                  <textarea value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)} rows={3}
                    style={{ ...inputStyle, fontFamily: 'inherit' }} />
                  <p style={{ fontSize: '.72rem', color: 'var(--text3)', marginTop: 4 }}>{metaDescription.length}/160 characters (recommended)</p>
                </label>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
            <button onClick={() => handleSave('draft')} disabled={saving || !title || !content} className="btn btn-outline">
              Save Draft
            </button>
            <button onClick={() => handleSave('published')} disabled={saving || !title || !content} className="btn btn-gold">
              {status === 'published' ? 'Update & Keep Published' : 'Publish'}
            </button>
            <button onClick={() => navigate('/admin')} style={{ padding: '14px 20px', borderRadius: 7, border: 'none', background: 'transparent', color: 'var(--text3)', cursor: 'pointer', fontWeight: 600, fontFamily: 'inherit', fontSize: '.9rem' }}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
