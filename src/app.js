import { getWorkers } from "./controllers/workerController.js";
import express from "express";
import { config } from "dotenv";
import connectDB from "./config/db.config.js";

config();

const app = express();
app.use(express.json());
connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

app.get("/status", (_, response) => {
  const status = {
    Status: "Running",
  };
  response.send(status);
});
app.get("/workers", getWorkers);
