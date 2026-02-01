import express from "express";
const app = express();
import dotenv from "dotenv";
import authroutes from "./routes/auth.route.js";
import messageroutes from "./routes/message.route.js";
dotenv.config();
import path from "path"

const port = process.env.PORT || 5000;

const __dirname = path.resolve()


app.use("/api/auth", authroutes);
app.use("/api/messages", messageroutes);


// make ready for deployment

if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, "../frontend/dist" )))

  app.get(/.*/,(_,res) => {res.sendFile(path.join(__dirname, "../frontend","dist","index.html" ))})
}

// the "*" was old syntax will no longer work on express latest version the now syntax was /.*/ with new concept page-to-regexp v6"

app.listen(port, (req, res) =>
  console.log(`server is running on port : ${port}`),
);
