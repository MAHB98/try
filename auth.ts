import authConfig from "./auth.config";
import NextAuth from "next-auth";
import { db } from "./lib/database";
import { DefaultSession } from "next-auth";
declare module "@auth/core/adapters" {
  interface AdapterUser {
    password: string;
  }
}
declare module "next-auth" {
  interface User {
    role?: string;
  }
  interface Session {
    user: {
      /** The user's postal address. */
      address: string;
      /**
       * By default, TypeScript merges new interface properties and overwrites existing ones.
       * In this case, the default session user properties will be overwritten,
       * with the new ones defined above. To keep the default session user properties,
       * you need to add them back into the newly declared interface.
       */
    } & DefaultSession["user"];
  }
}
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: db,
  secret: process.env.auth_secret,
  trustHost: true,
  ...authConfig,
});
