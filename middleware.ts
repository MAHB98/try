import { NextResponse } from "next/server";
import { auth } from "@/auth";
// This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {
//   console.log(request.url);
//   if (request.url.includes("/about"))
//     return NextResponse.redirect(new URL("/welcome", request.url));
// }

// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
// };
export default auth((req) => {
  if (req.url.includes("/about")) {
    return NextResponse.redirect(new URL("/welcome", req.url));
  }
});
export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
