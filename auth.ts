import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import credentials from "next-auth/providers/credentials";

import NextAuth from "next-auth";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google, Github, credentials],
  secret: process.env.auth_secret,
  trustHost: true,
});
