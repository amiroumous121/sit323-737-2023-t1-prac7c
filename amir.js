const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

// Enable CORS for all routes
app.use(
  cors({
    origin: "http://127.0.0.1:3041", // Replace this with the allowed origin
  })
);

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/add", (req, res) => {
  console.log("Addition issues");
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  const result = num1 + num2;
  res.send(result.toString());
});

app.get("/subtract", (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  const result = num1 - num2;
  res.send(result.toString());
});

app.get("/multiply", (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  const result = num1 * num2;
  res.send(result.toString());
});

app.get("/divide", (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  if (num2 === 0) {
    res.status(400).send("Cannot divide by zero");
  } else {
    const result = num1 / num2;
    res.send(result.toString());
  }
});

app.listen(3041, () => {
  console.log("Server is running on port 3041");
});
