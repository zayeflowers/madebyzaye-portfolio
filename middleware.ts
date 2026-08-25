import { NextRequest, NextResponse } from 'next/server';

/**
 * Password-protects the /preview route, which renders the real homepage while
 * `/` shows the work-in-progress holding page.
 *
 * Credentials come from PREVIEW_USER / PREVIEW_PASSWORD. If PREVIEW_PASSWORD is
 * unset the route is blocked outright rather than left open — a protection
 * mechanism that silently fails open is worse than none.
 */

const REALM = 'Made By Zaye preview';

/** Length-independent comparison, so a wrong guess can't be timed. */
function safeEqual(a: string, b: string): boolean {
  const encoder = new TextEncoder();
  const aBytes = encoder.encode(a);
  const bBytes = encoder.encode(b);
  if (aBytes.length !== bBytes.length) return false;

  let diff = 0;
  for (let i = 0; i < aBytes.length; i++) {
    diff |= aBytes[i] ^ bBytes[i];
  }
  return diff === 0;
}

function challenge(): NextResponse {
  return new NextResponse('Authentication required.', {
    status: 401,
    headers: {
      'WWW-Authenticate': `Basic realm="${REALM}", charset="UTF-8"`,
      'Cache-Control': 'no-store',
    },
  });
}

export function middleware(request: NextRequest) {
  const expectedUser = process.env.PREVIEW_USER || 'preview';
  const expectedPassword = process.env.PREVIEW_PASSWORD;

  if (!expectedPassword) {
    return new NextResponse(
      'Preview is unavailable: PREVIEW_PASSWORD is not configured.',
      { status: 503, headers: { 'Cache-Control': 'no-store' } }
    );
  }

  const header = request.headers.get('authorization');
  if (!header?.startsWith('Basic ')) return challenge();

  let decoded: string;
  try {
    decoded = atob(header.slice('Basic '.length));
  } catch {
    return challenge();
  }

  // Only the first colon separates user from password.
  const separator = decoded.indexOf(':');
  if (separator === -1) return challenge();

  const user = decoded.slice(0, separator);
  const password = decoded.slice(separator + 1);

  // Both compared every time so the response time doesn't reveal which failed.
  const userOk = safeEqual(user, expectedUser);
  const passwordOk = safeEqual(password, expectedPassword);
  if (!userOk || !passwordOk) return challenge();

  const response = NextResponse.next();
  response.headers.set('Cache-Control', 'no-store');
  return response;
}

export const config = {
  matcher: ['/preview', '/preview/:path*'],
};
