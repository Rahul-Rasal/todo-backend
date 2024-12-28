import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import express from "express";
import connectDB from "./config/db.js";
import router from "./routes/todoRoutes.js";

const app = express();

app.use(express.json());
app.use("/", router);

connectDB().catch((error) => {
  console.log("DB connection calling failed", error);
});
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`The Server is Running on PORT :${PORT} `);
});
