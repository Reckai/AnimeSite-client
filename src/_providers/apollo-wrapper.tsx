'use client';

import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  NextSSRApolloClient,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr';
import { ApolloLink, HttpLink } from '@apollo/client';

function makeClient(cookie: string) {
  const httpLink = new HttpLink({
    fetchOptions: { cache: 'no-store' },
    headers: { authorization: `Bearer ${cookie}` }, // <= our token
    uri: process.env.NEXT_PUBLIC_API_URL,
    credentials: 'include',
  });

  return new NextSSRApolloClient({
    link:
            typeof window === 'undefined'
              ? ApolloLink.from([
                new SSRMultipartLink({
                  stripDefer: true,
                }),
                httpLink,
              ])
              : httpLink,
    cache: new NextSSRInMemoryCache(),
  });
}

export function ApolloWrapper({ children, cookie }: React.PropsWithChildren<{ cookie: string }>) {
  const initializeClientWithCookie = () => makeClient(cookie); // initialize ApolloWrapper with Cookie
  return (
    <ApolloNextAppProvider makeClient={initializeClientWithCookie}>
      {children}
    </ApolloNextAppProvider>
  );
}
