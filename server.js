const express = require("express");
const app = express();
const fs = require("fs");
const movieRouter = require("./src/api/movies");
app.use(express.json());

app.use("/movie", movieRouter);

app.get("/", (req, res) => {
  res.json();
});

app.listen(3000, () => console.log("Listen on port 3000"));
