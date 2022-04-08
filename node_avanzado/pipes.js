const fs = require("fs");

const streamLectura = fs.createReadStream("./base.txt");
const streamEscritura = fs.createWriteStream("./destino.txt");

streamLectura.pipe(streamEscritura);
streamLectura.on("end", () => {
  console.log("Proceso terminado");
});
