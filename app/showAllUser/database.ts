"use server";
// export const runtime = "edge";
import { db } from "@/lib/database";

export const database = async (email: string) => {
  try {
    const user = await db.getUserByEmail!(email);

    return user;
  } catch (error) {
    console.log(error);

    return null;
  }
};
