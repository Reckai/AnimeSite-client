import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

import React from 'react';
import { cookies } from 'next/headers';
import { ApolloWrapper } from '../_providers/apollo-wrapper';
import SessionWrapper from '@/_providers/SessionWrapper';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Anime Page',
  description: 'made by @Reckai',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookie = cookies();
  const token = cookie.get('access_token');

  return (
    <html lang="en">
      <body className={inter.className}>

        <ApolloWrapper cookie={token?.value ? token.value : ''}>
          <SessionWrapper>
            {children}
          </SessionWrapper>
        </ApolloWrapper>
      </body>
    </html>
  );
}
