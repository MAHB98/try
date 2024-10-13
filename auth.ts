import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import { db } from "./lib/database";
import { DefaultSession } from "next-auth";
import { database } from "./app/showAllUser/database";
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
  providers: [
    Google,
    Github,
    credentials({
      authorize: async (credentials) => {
        console.log(credentials);

        if (!credentials.email || !credentials.password) return null;
        // const getUser = await database(credentials.email as string);
        // // const getUser = await db.getUserByEmail!(credentials.email as string);
        // if (!getUser) return null;
        // console.log(getUser);

        // const compare = await bcrypt.compare(
        //   credentials.password as string,
        //   database.password
        // );
        // if (!compare) return null;
        return null;
      },
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
  adapter: db,
  secret: process.env.auth_secret,
  trustHost: true,
});
