const express = require("express");
const router = express.Router();
let moviesDB = [
  {
    id: 1,
    name: "Taxi Driver",
    categoria: "Cine Negro",
    like: false,
  },
  {
    id: 2,
    name: "El Padrino",
    categoria: "Drama",
    like: true,
  },
  {
    id: 3,
    name: "GoodFellas",
    categoria: "Mafia",
    like: true,
  },
  {
    id: 4,
    name: "American Pie",
    categoria: "Comedia",
    like: true,
  },
];

// Esto se hace con el PostMan
//creamos ID para las peliculas
router.post("/", (req, res) => {
  let movie = req.body;
  movie.id = Math.random();
  moviesDB.push(movie);
  res.json(movie);
});

///////likes
router.get("/like/:id", (req, res) => {
  let id = Number(req.params.id);
  let movieEditIndex = moviesDB.findIndex((movie) => movie.id === id);
  res.json(moviesDB[movieEditIndex].like);
});

router.get("/like", (req, res) => {
  let likedDDBB = moviesDB.filter((movie) => movie.like);
  res.json(likedDDBB);
});

router.get("/unlike", (req, res) => {
  let likedDDBB = moviesDB.filter((movie) => !movie.like);
  res.json(likedDDBB);
});

//http://localhost:3000//like/3 EN POSTMAN POR EJEMPLO
router.put("/like/:id", (req, res) => {
  let id = Number(req.params.id);
  let movieEditIndex = moviesDB.findIndex((movie) => movie.id === id);
  moviesDB[movieEditIndex].like = !moviesDB[movieEditIndex].like;
  res.json(moviesDB[movieEditIndex]);
});

//Cambia el nombre de la pelicula
router.put("/:id", (req, res) => {
  let id = Number(req.params.id);
  let movieEditIndex = moviesDB.findIndex((movie) => movie.id === id);
  moviesDB[movieEditIndex].name = req.body.name;
  res.json(moviesDB[movieEditIndex]);
});
//Muestra solo 1 pelicula
router.get("/:id", (req, res) => {
  console.log("Estoy aqui");
  let id = Number(req.params.id);
  let movieEdit = moviesDB.find((movie) => movie.id === id);
  res.json(movieEdit);
});
//Borra 1 pelicula
router.delete("/:id", (req, res) => {
  let id = Number(req.params.id);
  let movieEditIndex = moviesDB.findIndex((movie) => movie.id === id);
  res.json(moviesDB.splice(movieEditIndex, 1));
});

router.get("/", (req, res) => {
  res.json(moviesDB);
});

module.exports = router;