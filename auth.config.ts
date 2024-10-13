import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import credentials from "next-auth/providers/credentials";
import { database } from "./app/showAllUser/database";
import bcrypt from "bcryptjs";
// Notice this is only an object, not a full Auth.js instance
export default {
  secret: process.env.auth_secret,
  trustHost: true,
  providers: [
    Google,
    Github,
    credentials({
      authorize: async (credentials) => {
        console.log(credentials);

        if (!credentials.email || !credentials.password) return null;
        const email = credentials.email;

        const res = await fetch("http://localhost:3000/api/getUser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
          }),
        });
        const getUser = await res.json();
        // const getUser = await db.getUserByEmail!(credentials.email as string);
        if (!getUser) return null;
        console.log(getUser);

        const compare = await bcrypt.compare(
          credentials.password as string,
          getUser.password
        );
        if (!compare) {
          console.log("wrong pasword");

          return null;
        }
        console.log(getUser);

        return getUser;
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
