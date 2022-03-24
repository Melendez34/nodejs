var libro = require("./libros.json");

console.log(libro.libro);

var fs = require("fs");

fs.readFile("./libros.json", (error, datos) => {
  console.log(JSON.parse(datos));
});
