/* eslint-disable prettier/prettier */
import NextAuth from 'next-auth'

import GithubProvider from 'next-auth/providers/github'

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET as string,
    }),
  ],
})

export { handler as GET, handler as POST }

