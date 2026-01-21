import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request, cookies }) => {
  // Only accept POST requests
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const body = await request.json() as { password?: string };
    const submittedPassword = body.password || '';
    const expectedPassword = import.meta.env.CASE_STUDY_PASSWORD || '';

    // Validate password
    if (!expectedPassword) {
      return new Response(JSON.stringify({ error: 'Password not configured' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (submittedPassword === expectedPassword) {
      // Set auth cookie (7 days expiration)
      cookies.set('caseStudyAuth', expectedPassword, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7, // 7 days
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
      });

      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      return new Response(JSON.stringify({ error: 'Invalid password' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  } catch (error) {
    console.error('Authentication error:', error);
    return new Response(JSON.stringify({ error: 'Invalid request' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
