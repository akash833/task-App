import express from "express";
import { connectDB } from "./config/index.js";
import taskRouter from "./routes/tasks.js";
import { config } from "dotenv";
import cors from "cors"; // Import cors middleware

config();
const app = express();

// Connect to the database
connectDB(process.env.MONGO_URL);

// Define allowed origin
const allowedOrigin = "http://localhost:3000";

// Use CORS middleware with the specified origin
app.use(
  cors({
    origin: allowedOrigin,
  })
);

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use("/tasks", taskRouter);

// Start server
const port = process.env.PORT || 5000; // Default port to 5000 if not specified
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
