// One-time endpoint to create the first (and only) admin account.
// Guarded by the SETUP_KEY secret (set in Cloudflare Pages env vars) and
// refuses to run again once an admin already exists.
//
// Usage (run once, then you can leave this endpoint in place — it will
// always refuse after the first admin is created):
//
// curl -X POST https://<your-site>/api/setup \
//   -H "Content-Type: application/json" \
//   -H "X-Setup-Key: <SETUP_KEY value>" \
//   -d '{"email":"you@advanseit.com.au","password":"choose-a-strong-password"}'

import { generateSalt, hashPassword } from '../_lib/auth.js';

export async function onRequestPost(context) {
  const { request, env } = context;

  if (!env.SETUP_KEY || request.headers.get('X-Setup-Key') !== env.SETUP_KEY) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  }

  const existing = await env.DB.prepare('SELECT id FROM admin_users LIMIT 1').first();
  if (existing) {
    return new Response(JSON.stringify({ error: 'Admin already exists. Setup can only run once.' }), { status: 403 });
  }

  const { email, password } = await request.json();
  if (!email || !password || password.length < 10) {
    return new Response(JSON.stringify({ error: 'Email and a password of at least 10 characters are required.' }), { status: 400 });
  }

  const salt = generateSalt();
  const hash = await hashPassword(password, salt);

  await env.DB.prepare('INSERT INTO admin_users (email, password_hash, salt) VALUES (?, ?, ?)')
    .bind(email, hash, salt)
    .run();

  return new Response(JSON.stringify({ ok: true }), { status: 201, headers: { 'Content-Type': 'application/json' } });
}
