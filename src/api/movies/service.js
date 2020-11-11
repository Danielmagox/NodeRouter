const fs = require("fs");

let moviesDB = [];
//leemos de la BBDD
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
//guardamos la informacion en la BBDD
const saveDatabase = () => {
  console.log("Leyendo de la base de datos");
  return new Promise((resolve, reject) => {
    fs.writeFile("movies_db.json", JSON.stringify(moviesDB), (err, data) => {
      if (err) {
        reject("Hubo un error en la escritura del fichero");
      } else {
        resolve();
      }
    });
  });
};

const getMovieIndex = (id) => {
  return moviesDB.findIndex((movie) => movie.id === id);
};

function getMovies() {
  return moviesDB;
}

function createMovie(movie) {
  //AQUI ENTRA LA PETICION DEL POSTMAN ACORDARSE DE PONERLA EN EL BODY
  movie.id = Math.random();
  moviesDB.push(movie);
  saveDatabase();
  return movie;
}

const isLike = (id) => {
  return moviesDB[getMovieIndex(id)].like;
};

module.exports = { createMovie, loadDatabase, getMovies, isLike };
