import mysql from "mysql2";
import mysqlAdapter from "@mahb98/mysql-adapter";
const pool = mysql
  .createPool({
    host: "sql12.freesqldatabase.com",
    user: "sql12736019",
    database: "sql12736019",
    password: "VtPjvrMa3g",
  })
  .promise();
// export const res = async () => {
//   const [res] = await pool.query("select * from users");
//   return res;
// };
const user = {
  email: "asa0",
  name: "sdsd0",
  id: "1",
  image: null,
  emailVerified: null,
};
export const res = () => mysqlAdapter(pool).getUser!(user.id);
