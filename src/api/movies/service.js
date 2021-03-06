const fs = require("fs");
let moviesDB = {};

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

const getMovieIndex = (id) => {
  return moviesDB.findIndex((movie) => movie.id === id);
};

const isLike = (id) => {
  return moviesDB[getMovieIndex(id)].like;
};

const saveDatabase = () => {
  console.log("Guardando la base de datos");
  return new Promise((resolve, reject) => {
    fs.writeFile(
      "movies_db.json",
      JSON.stringify(moviesDB, null, 2),
      (err, data) => {
        if (err) {
          reject("Hubo un error en la escritura del fichero");
        } else {
          resolve();
        }
      }
    );
  });
};

function getMovies() {
  return moviesDB;
}

const getMovie = (id) => moviesDB[id];

function createMovie(movie) {
  moviesDB.size++;
  movie.id = moviesDB.size;
  moviesDB[moviesDB.size] = movie;
  saveDatabase();
  return movie;
}

module.exports = { createMovie, loadDatabase, getMovies, isLike, getMovie };
