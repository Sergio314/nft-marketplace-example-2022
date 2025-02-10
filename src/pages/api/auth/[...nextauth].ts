import { NextApiRequest, NextApiResponse } from 'next';
// import NextAuth, { NextAuthOptions } from 'next-auth';
// import GoogleProvider from 'next-auth/providers/google';

import { api } from '@/core/api';
import { authPaths } from '@/core/api/api.config';
import { paths } from '@/data/paths';

const nextAuthOptions = (req: NextApiRequest, res: NextApiResponse) => {
  return {
    pages: { error: paths.login },
    providers: [
      // GoogleProvider({
      //   clientId: process.env.GOOGLE_CLIENT_ID as string,
      //   clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      // }),
    ],
    callbacks: {
      signIn: async ({ account, profile }) => {
        if (profile.email_verified === true) {
          if (account?.access_token) {
            try {
              const response = await api.post(authPaths.google, {
                token: account.access_token,
              });
              if (response.status === 200 && response.data.success) {
                const cookies = response.headers['set-cookie'];
                res.setHeader('Set-Cookie', cookies);
              } else {
                throw new Error(response.data.message || "Can't sign in to your account");
              }
            } catch (e) {
              throw e;
            }
          }
          return Promise.resolve(true)
        }

        return Promise.resolve(false)
      },
    },
  };
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  // return NextAuth(req, res, nextAuthOptions(req, res));
};
