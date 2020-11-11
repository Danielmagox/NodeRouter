const express = require("express");
const app = express();
const movieRouter = require("./src/api/movies");
const { loadDatabase } = require("./src/api/movies/service");
app.use(express.json());

//middleware for the keys, used in Postman
app.use((req, res, next) => {
  console.log("paso por aqui");
  if (req.headers.clavesupersegura === "1234") {
    next();
  } else {
    res.sendStatus(401);
  }
});

app.use("/movie", movieRouter);

app.get("/", (req, res) => {
  console.log(req.headers);
  res.json();
});

loadDatabase()
  .then(() => {
    app.listen(3000, () => console.log("Listen on port 3000"));
  })
  .catch((err) => {
    console.error("Database wasn't loaded", err);
  });
