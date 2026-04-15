import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/auth.js";
import taskRoutes from "./routes/tasks.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors({
  origin: "*"
}));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Atlas Connected"))
  .catch(err => console.log(err));
 

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
