"use server";

import { signIn } from "@/auth";

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
