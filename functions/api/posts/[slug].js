export async function onRequestGet(context) {
  const { env, params } = context;

  const row = await env.DB.prepare(
    `SELECT id, title, slug, excerpt, content, cover_image, tags, meta_title, meta_description, published_at
     FROM posts WHERE slug = ? AND status = 'published'`
  ).bind(params.slug).first();

  if (!row) {
    return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 });
  }

  const post = { ...row, tags: row.tags ? JSON.parse(row.tags) : [] };

  return new Response(JSON.stringify({ post }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
