import type { NextAuthConfig } from 'next-auth';
import Discord from '@auth/core/providers/discord';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { db } from '@/lib/db';

export default {
  callbacks: {
    async signIn(user, account) {
      const  existingUser = await db.user.findUnique({ where: { id: user.user.id as string } })
      if (existingUser) {
        const token = await jwt.sign(user.user.id, process.env.AUTH_SECRET);
        await db.user.update({
          where: { id: user.user.id as string },
          data: { accessToken: token },
        });
         cookies().set('access_token', token, {
          httpOnly: true,
        });
      }
      return true;
    },

    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      return session;
    },
    async jwt({
      token, account, user, profile,
    }) {
      // Persist the OAuth access_token to the token right after signin

      if (account) {
        token.accessToken = account.access_token;
      }

      return token;
    },
  },
  providers: [
    Discord({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
    }),
  ],
} satisfies NextAuthConfig;
