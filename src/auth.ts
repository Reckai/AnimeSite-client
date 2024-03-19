import NextAuth from 'next-auth';

import { PrismaAdapter } from '@auth/prisma-adapter';

import { db } from '@/lib/db';
import authConfig from '@/auth.config';

export const { handlers: { GET, POST }, auth } = NextAuth({
pages:{
    signIn: '/auth/signin',

},
  events: {
    async linkAccount({ user }) {
      try {
        await db.user.update({
          where: { id: user.id },
          data: { emailVerified: new Date() },
        });
        console.log('success');
      } catch (e) {
        console.error(e);
      }
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: 'jwt' },
  ...authConfig,
});
