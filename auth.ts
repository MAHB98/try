import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import { db } from "./lib/database";
declare module "@auth/core/adapters" {
  interface AdapterUser {
    password: string;
  }
}
declare module "next-auth" {
  interface User {
    role?: string;
  }
}
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google,
    Github,
    credentials({
      // async authorize(credentials) {
      //   console.log(credentials.email);

      //   if (!credentials.email || !credentials.password) return null;
      //   const getUser = await db.getUserByEmail!(credentials.email as string);
      //   if (!getUser) return null;
      //   console.log(getUser);

      //   const compare = await bcrypt.compare(
      //     credentials.password as string,
      //     getUser.password
      //   );
      //   if (!compare) return null;
      //   return getUser;
      // },
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "email",
        },
        password: {
          label: "password",
          type: "password",
          placeholder: "password",
        },
      },
    }),
  ],
  secret: process.env.auth_secret,
  trustHost: true,
});
