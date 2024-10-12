import { res } from "@/lib/database";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  let { id } = await req.json().catch(() => console.log("body is require"));
  if (!id) {
    id = "2";
  }
  console.log(id);

  const user = await res(id);
  return NextResponse.json(user);
};
