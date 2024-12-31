import express from "express";
import morgan from "morgan";
import connectToDatabase  from "./db/db.js";
import userRoutes from "./routes/user.routes.js";
import cors from "cors";

connectToDatabase(); 

const app = express();

app.use("/user", userRoutes);
app.use(morgan("dev"));
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;