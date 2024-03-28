import NextAuth from 'next-auth';
import authConfig from '@/auth.config';
import {
  apiAuthPrefix, authRoutes, DEFAULT_LOGIN_REDIRECT, publicRoutes,
} from '@/lib/routes';

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  console.log('isLoggedIn', isLoggedIn);
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isSubstringOfPublicRoute = publicRoutes.some((route) => nextUrl.pathname.indexOf(route) !== -1);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute) {
    return null;
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return null;
  }

  if (!isLoggedIn && !isSubstringOfPublicRoute) {
    return Response.redirect(new URL(
      '/auth/signin',
      nextUrl,
    ));
  }

  return null;
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
