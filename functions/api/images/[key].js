export async function onRequestGet(context) {
  const { env, params } = context;

  if (!env.IMAGES) {
    return new Response('Image storage is not configured.', { status: 500 });
  }

  const object = await env.IMAGES.get(params.key);
  if (!object) {
    return new Response('Not found', { status: 404 });
  }

  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set('etag', object.httpEtag);
  headers.set('Cache-Control', 'public, max-age=31536000, immutable');

  return new Response(object.body, { headers });
}
