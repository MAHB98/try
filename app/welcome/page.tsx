import { auth } from "@/auth";
import Link from "next/link";

const page = async () => {
  const session = await auth();
  return (
    <div className="flex flex-col">
      <p>welcome</p>
      <p className="text-yellow-200">{session?.user?.name}</p>
      {!!session ? (
        <Link className="text-blue-300" href={"/api/auth/signout"}>
          signOut
        </Link>
      ) : (
        <Link href={"/api/auth/signin"}>signin</Link>
      )}
    </div>
  );
};
export default page;
