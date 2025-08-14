// This is the complete and FINAL correct code for: lib/db.ts

import mysql from "mysql2";

// Next.js automatically loads the .env file in the root directory.
// We DO NOT need to use the dotenv package here.

export const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
