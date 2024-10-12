"use server";

import { auth, signIn } from "@/auth";
import { db } from "@/lib/database";
export const submit = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  await signIn("credentials", { email, password });

  return;
  // return getUser
};
