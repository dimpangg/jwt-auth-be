import express from "express";
import dotenv from "dotenv";
import cookieParses from "cookie-parser";
import cors from "cors";
import db from "./config/Database.js";
import router from "./routes/index.js";

dotenv.config();
const app = express();

try {
  await db.authenticate();
  console.log("DB connect");
} catch (error) {
  console.error(error);
}

app.use(cors({credentials: true, origin: "http://localhost:3000"}));
app.use(cookieParses());
app.use(express.json());
app.use(router);

app.listen(5000, () => console.log("server running at port 5000"));
