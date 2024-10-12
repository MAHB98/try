import { res } from "@/lib/database";
import { User } from "next-auth";
const page = async () => {
  const users = ((await res()) as User) || null;
  return (
    <div>
      page
      {!!users && (
        <div key={users.id} className="flex-col">
          <p> {users.name}</p>
          <p>{users.email}</p>
        </div>
      )}
    </div>
  );
};
export default page;
