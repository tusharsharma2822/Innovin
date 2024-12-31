import express from "express";
import morgan from "morgan";
import connectToDatabase  from "./db/db.js";

connectToDatabase(); 

const app = express();
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;