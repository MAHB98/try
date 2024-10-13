"use client";
// import { User } from "next-auth";
import { useState } from "react";
import { User } from "next-auth";

const Page = () => {
  const [id, setId] = useState("");
  const [users, setUser] = useState<User | null>(null);
  const [enable, setEnable] = useState(false);
  return (
    <div className="flex flex-col m-2  gap-2">
      <input
        type="email"
        className="text-black"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button
        onClick={async () => {
          setEnable(true);
          // setUser(await database(id));
          const res = await fetch("http://localhost:3000/api/getUser", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id,
            }),
          });
          setUser(await res.json());

          setEnable(false);
        }}
        type="submit"
        disabled={enable}
        className="border-2 border-red-300 hover:bg-blue-400 disabled:bg-purple-500"
      >
        submit
      </button>

      {!!users && (
        <div key={users.id} className="flex-col">
          <p> {users.name}</p>
          <p>{users.email}</p>
        </div>
      )}
    </div>
  );
};
export default Page;
// const page = async () => {
//   const user = await fetch("http://localhost:3000/api/getUser", {
//     method: "POST",
//   });
//   console.log(user);

//   return <div>page</div>;
// };
// export default page;
