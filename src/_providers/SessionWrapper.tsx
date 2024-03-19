import React from 'react';
import { SessionProvider } from 'next-auth/react';
import { auth } from '@/auth';

async function SessionWrapper({ children }: React.PropsWithChildren) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  );
}

export default SessionWrapper;
