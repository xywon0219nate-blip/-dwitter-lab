import db from '../DB/connection.js';

export const getHeader = async() => {
   const sql = `select header from portfolio`;
   const [results, fields] = await db.execute(sql, []);
   console.log(results[0].header);
   // console.log(results);
   
   
   return await results[0].header;
}