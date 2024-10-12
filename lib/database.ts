import mysql from "mysql2";
const pool = mysql
  .createPool({
    host: "127.0.0.1",
    user: "root",
    database: "marketplace",
    password: "13761376",
  })
  .promise();
export const res = async () => {
  const [res] = await pool.query("select * from users");
  return res;
};
