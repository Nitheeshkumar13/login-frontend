import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Connect to MongoDB Atlas (Cloud)
mongoose
  .connect("mongodb+srv://nitheeshk:nk@cluster0.cjephei.mongodb.net/expressDB?retryWrites=true&w=majority")
  .then(() => console.log("✅ DB Connected Successfully"))
  .catch((err) => console.log(`❌ DB Connection Error: ${err}`));

// ✅ Use routes
app.use("/api/users", userRoutes);

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
