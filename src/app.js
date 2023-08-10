import { getWorkers } from "./controllers/workerController";

const express = require("express");
const { default: connectDB } = require("./config/db.config");
require("dotenv").config();

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
