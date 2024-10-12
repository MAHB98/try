import { res } from "@/lib/database";
import { User } from "next-auth";
const page = async () => {
  const users = (await res()) as User[];
  return (
    <div>
      page
      {!!users && users.map((ar) => <p key={ar.id}>{ar.name}</p>)}
    </div>
  );
};
export default page;
