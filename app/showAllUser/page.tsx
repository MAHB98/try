import { res } from "@/lib/database";
import { User } from "next-auth";
const page = async () => {
  const users = (await res()) as User[];
  return (
    <div>
      page
      {!!users &&
        users.map((ar) => (
          <div key={ar.id} className="flex-col">
            <p> {ar.name}</p>
            <p>{ar.email}</p>
          </div>
        ))}
    </div>
  );
};
export default page;
