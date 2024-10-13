"use server";

import { db } from "@/lib/database";

export const database = async (email: string) => {
  const user = await db.getUserByEmail!(email);
  return user;
};
