import NextAuth from 'next-auth';

import { PrismaAdapter } from '@auth/prisma-adapter';

import { db } from '@/lib/db';
import authConfig from '@/auth.config';
import jwt from "jsonwebtoken";
import { cookies } from 'next/headers';

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  pages: {
    signIn: '/auth/signin',
  },

  events: {
    async linkAccount({ user }) {
      try {
        const token = await jwt.sign(user.id, process.env.AUTH_SECRET);

        await db.user.update({
          where: { id: user.id },
          data: { emailVerified: new Date() , accessToken: token},
        });
        await cookies().set('access_token', token,{
          httpOnly: true,
        })
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
