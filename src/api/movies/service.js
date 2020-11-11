const fs = require("fs");

let moviesDB = [];

const loadDatabase = () => {
  console.log("Leyendo de la base de datos");
  return new Promise((resolve, reject) => {
    fs.readFile("movies_db.json", (err, data) => {
      if (err) {
        reject("Hubo un error en la lectura del fichero");
      } else {
        moviesDB = JSON.parse(data.toString());
        resolve();
      }
    });
  });
};

function getMovies() {
  return moviesDB;
}

function createMovie(movie) {
  movie.id = Math.random();
  moviesDB.push(movie);
  return movie;
}

module.exports = { createMovie, loadDatabase, getMovies };
