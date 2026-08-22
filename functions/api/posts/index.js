export async function onRequestGet(context) {
  const { env } = context;

  const { results } = await env.DB.prepare(
    `SELECT id, title, slug, excerpt, cover_image, published_at
     FROM posts
     WHERE status = 'published'
     ORDER BY published_at DESC`
  ).all();

  return new Response(JSON.stringify({ posts: results }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
