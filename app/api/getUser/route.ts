import { db } from "@/lib/database";
import { config } from "@/middleware";
import { NextRequest, NextResponse } from "next/server";
export const POST = async (req: NextRequest) => {
  let data = await req.json().catch(() => {
    console.log("body is require");
    return NextResponse.json("body is require");
  });
  console.log(data);

  // if (!id) {
  //   id = "2";
  // }
  // console.log(id);
  try {
    const user = await db.getUserByEmail!(data.email);
    console.log(user);
    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    return null;
  }
};
