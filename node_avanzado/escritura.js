const fs = require("fs");

var contenido = "1234567";
var iteracion = 5;

//* este metodo por stream permite que se generen hilos de procesos
//* se vuelve mas eficiente y optimiza el proceso de escritura
const streamEscritura = fs.createWriteStream("./destino.txt");

for (let i = 0; i < iteracion; i++) {
  contenido += contenido;
  streamEscritura.write(contenido, (res) => {
    console.log(`iteracion ${i}`);
  });
}
//* metodo tradicional para escribir un archivo
fs.writeFile("./archivo1.txt", contenido, () => {
  console.log("archivo directo finalizado");
});
