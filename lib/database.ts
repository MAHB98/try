import mysql from "mysql2";
const pool = mysql
  .createPool({
    host: "sql12.freesqldatabase.com",
    user: "sql12736019",
    database: "sql12736019",
    password: "VtPjvrMa3g",
  })
  .promise();
export const res = async () => {
  const [res] = await pool.query("select * from users");
  return res;
};
