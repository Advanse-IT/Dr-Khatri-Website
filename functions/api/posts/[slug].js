export async function onRequestGet(context) {
  const { env, params } = context;

  const post = await env.DB.prepare(
    `SELECT id, title, slug, excerpt, content, cover_image, published_at
     FROM posts WHERE slug = ? AND status = 'published'`
  ).bind(params.slug).first();

  if (!post) {
    return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 });
  }

  return new Response(JSON.stringify({ post }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
