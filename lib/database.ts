import mysql from "mysql2";
import mysqlAdapter from "@mahb98/mysql-adapter";
const pool = mysql
  .createPool({
    host: process.env.mysql_host,
    user: process.env.mysql_user,
    database: process.env.mysql_database,
    password: process.env.mysql_password,
  })
  .promise();
// export const res = async () => {
//   const [res] = await pool.query("select * from users");
//   return res;
// };
// const user = {
//   email: "asa0",
//   name: "sdsd0",
//   id: "1",
//   image: null,
//   emailVerified: null,
// };
export const res = (id: string) => mysqlAdapter(pool).getUser!(id);
