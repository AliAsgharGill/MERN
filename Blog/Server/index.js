import express from "express";
import connectDB from "./config/db.js";

const app = express();
const PORT = 5000;

connectDB();

app.get("/", (req, res) => {
  res.send("Hello World! API running");
});

app.listen(PORT, () => {
  console.log(`App Api listening at http://localhost:${PORT}`);
});
