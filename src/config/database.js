import { createConnection } from "mysql";
import dotenv from "dotenv";

dotenv.config();

const connectDatabase = () => {
  const connection = createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  connection.connect((err) => {
    if (err) {
      console.error("Error connecting to the database:", err);
      return;
    }
    console.log("Connected to the MySQL database.");
  });

  return connection;
};

export default connectDatabase;
