const express = require("express");
const app = express();
const movieRouter = require("./src/api/movies");
const { loadDatabase } = require("./src/api/movies/service");
app.use(express.json());

app.use("/movie", movieRouter);

app.get("/", (req, res) => {
  res.json();
});

loadDatabase()
  .then(() => {
    app.listen(3000, () => console.log("Listen on port 3000"));
  })
  .catch((err) => {
    console.error("Database wasn't loaded", err);
  });
