// Import the mysql2 package
const mysql = require("mysql2");
require("dotenv").config(); // Make sure .env variables are available

// Create a "connection pool"
// A pool is more efficient than a single connection for handling multiple requests.
const pool = mysql.createPool({
  host: process.env.DB_HOST, // Get host from .env file
  user: process.env.DB_USER, // Get user from .env file
  password: process.env.DB_PASSWORD, // Get password from .env file
  database: process.env.DB_NAME, // Get database name from .env file
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// We wrap the pool in a Promise-based interface, which is easier to work with.
module.exports = pool.promise();
