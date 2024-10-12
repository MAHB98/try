import { FaUnlockKeyhole } from "react-icons/fa6";
import { submit } from "../action/submit";
import bcrypt from "bcryptjs";

const page = () => {
  return (
    <div className="h-full flex bg-black text-neutral-400 justify-center ">
      <form
        action={async (e) => {
          "use server";
          const email = e.get("email") as string;
          const password = e.get("password") as string;

          const res = await submit({ email, password });
          console.log(res);
        }}
        className=" grid grid-cols-3 border-2  my-auto bg-slate-500 text-center "
      >
        <header className="m-5 col-span-3  flex justify-center gap-2 font-semibold my-5">
          <FaUnlockKeyhole className=" fill-yellow-300" />

          <h1>signin</h1>
        </header>

        <label htmlFor="email" className="m-5 p-2 ">
          email
        </label>
        <input
          type="email"
          name="email"
          id={"email"}
          className="m-5 text-black
                    text-center
                  bg-slate-300
                  border-b-2 py-3
                  col-span-2"
          placeholder="your email"
        />
        <label htmlFor="password" className="m-5 p-2">
          password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="m-5 text-black text-center
          bg-slate-300 border-t-2 py-3
          col-span-2"
          placeholder="enter your password"
        />
        <button
          type="submit"
          className=" my-3 w-full h-2/3 col-span-3 
        
        text-center  border-t-2 "
        >
          submit
        </button>
      </form>
    </div>
  );
};
export default page;
