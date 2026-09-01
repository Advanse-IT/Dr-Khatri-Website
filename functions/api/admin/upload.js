const MAX_SIZE_BYTES = 8 * 1024 * 1024; // 8MB
const ALLOWED_TYPES = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
  'image/gif': 'gif',
};

function randomId() {
  return Array.from(crypto.getRandomValues(new Uint8Array(8)))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

export async function onRequestPost(context) {
  const { request, env } = context;

  if (!env.IMAGES) {
    return new Response(JSON.stringify({ error: 'Image storage is not configured (R2 binding missing).' }), { status: 500 });
  }

  let formData;
  try {
    formData = await request.formData();
  } catch {
    return new Response(JSON.stringify({ error: 'Expected multipart/form-data with a file field.' }), { status: 400 });
  }

  const file = formData.get('file');
  if (!file || typeof file === 'string') {
    return new Response(JSON.stringify({ error: 'No file provided.' }), { status: 400 });
  }

  const contentType = file.type;
  const ext = ALLOWED_TYPES[contentType];
  if (!ext) {
    return new Response(JSON.stringify({ error: 'Unsupported file type. Use JPEG, PNG, WebP, or GIF.' }), { status: 400 });
  }

  if (file.size > MAX_SIZE_BYTES) {
    return new Response(JSON.stringify({ error: 'File too large. Maximum size is 8MB.' }), { status: 400 });
  }

  const key = `${Date.now().toString(36)}-${randomId()}.${ext}`;
  const buffer = await file.arrayBuffer();

  await env.IMAGES.put(key, buffer, {
    httpMetadata: { contentType },
  });

  return new Response(JSON.stringify({ ok: true, url: `/api/images/${key}` }), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
}
