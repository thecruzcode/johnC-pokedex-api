const express = require("express");
const morgon = require("morgan");

const app = express();

app.use(morgon("dev"));

app.use((req, res) => {
  res.send("Hello, Cow");
});

const PORT = 8000;

app.listen(PORT, () => {
  console.log("Server listening at http://localhost:${PORT}");
});
