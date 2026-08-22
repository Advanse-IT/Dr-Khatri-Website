export async function onRequestGet(context) {
  const { env, params } = context;
  const post = await env.DB.prepare('SELECT * FROM posts WHERE id = ?').bind(params.id).first();
  if (!post) return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 });
  return new Response(JSON.stringify({ post }), { status: 200, headers: { 'Content-Type': 'application/json' } });
}

export async function onRequestPut(context) {
  const { request, env, params } = context;
  const body = await request.json().catch(() => ({}));
  const { title, content, excerpt, cover_image, status, slug } = body;

  if (!title || !content) {
    return new Response(JSON.stringify({ error: 'Title and content are required' }), { status: 400 });
  }

  const existingPost = await env.DB.prepare('SELECT * FROM posts WHERE id = ?').bind(params.id).first();
  if (!existingPost) return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 });

  const finalStatus = status === 'published' ? 'published' : 'draft';
  // Only stamp published_at the first time a post transitions to published
  const publishedAt = finalStatus === 'published'
    ? (existingPost.published_at || new Date().toISOString())
    : existingPost.published_at;

  await env.DB.prepare(
    `UPDATE posts SET title = ?, slug = ?, excerpt = ?, content = ?, cover_image = ?, status = ?, published_at = ?, updated_at = datetime('now')
     WHERE id = ?`
  ).bind(title, slug || existingPost.slug, excerpt || null, content, cover_image || null, finalStatus, publishedAt, params.id).run();

  return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { 'Content-Type': 'application/json' } });
}

export async function onRequestDelete(context) {
  const { env, params } = context;
  await env.DB.prepare('DELETE FROM posts WHERE id = ?').bind(params.id).run();
  return new Response(JSON.stringify({ ok: true }), { status: 200, headers: { 'Content-Type': 'application/json' } });
}
