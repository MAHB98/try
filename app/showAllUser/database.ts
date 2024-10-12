"use server";
import { res } from "@/lib/database";

export const database = async (id: string) => {
  const users = await res(id);
  console.log(users);
  return users;
};
