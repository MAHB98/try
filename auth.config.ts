import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import credentials from "next-auth/providers/credentials";
import { database } from "./app/showAllUser/database";
// Notice this is only an object, not a full Auth.js instance
export default {
  providers: [
    Google,
    Github,
    credentials({
      authorize: async (credentials) => {
        console.log(credentials);

        if (!credentials.email || !credentials.password) return null;
        const getUser = await database(credentials.email as string);
        // // const getUser = await db.getUserByEmail!(credentials.email as string);
        // if (!getUser) return null;
        console.log(getUser);

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
} satisfies NextAuthConfig;
