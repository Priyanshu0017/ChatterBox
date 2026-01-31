import express from "express";
const app = express();
import dotenv from "dotenv";
import authroutes from "./routes/auth.route.js";
import messageroutes from "./routes/message.route.js";
dotenv.config();

const port = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Chatterbox API RUNNING..."));
app.use("/api/auth", authroutes);
app.use("/api/messages", messageroutes);

app.listen(port, (req, res) =>
  console.log(`server is running on port : ${port}`),
);
