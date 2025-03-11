import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDatabase from "./config/database.js";
import routes from "./routes/index.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3002;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Database connection
connectDatabase();

// Routes
app.use("/", routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
