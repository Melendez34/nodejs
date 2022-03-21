var fs = require("fs");

fs.readdir("./assets/archivos", { withFileTypes: true }, (error, items) => {
  for (let i = 0; i < items.length; i++) {
    var frase = `Nombre:  ${items[i].name}`;
    var esDirectorio = `Es Archivo:  ${items[i].isFile()}`;
    console.log(frase);
    console.log(esDirectorio);
  }
  //console.log(items);
});

fs.writeFile("./assets/archivos/archivoCreado.txt", "1kg de bisteck", (error) => {
  if (error) {
    console.log("Error al escribir mensaje!", error);
  } else {
    console.log("Escritura en archivo exitosa.");
  }
});

var data = `\n segunda: 5555223311`;
fs.appendFile("./assets/archivos/numero.txt", data, (error) => {
  if (error) {
    console.log("Error al escribir mensaje!", error);
  } else {
    console.log("Escritura en archivo exitosa.");
  }
});
