var fs = require("fs");

fs.readFile("./assets/archivos/texto.txt", "utf-8", (error, datos) => {
  if (error) {
    console.log("Error de lectura");
    throw error;
  } else {
    console.log(datos);
  }
});
