export async function onRequestGet(context) {
  const { env } = context;

  const { results } = await env.DB.prepare(
    `SELECT id, title, slug, excerpt, cover_image, tags, published_at
     FROM posts
     WHERE status = 'published'
     ORDER BY published_at DESC`
  ).all();

  const posts = results.map((row) => ({
    ...row,
    tags: row.tags ? JSON.parse(row.tags) : [],
  }));

  return new Response(JSON.stringify({ posts }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
