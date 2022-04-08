const fs = require("fs");
const archivo = fs.createWriteStream("archivo.txt");

for (let i = 0; i < 1000000; i++) {
  archivo.write("Lorem Ipsum Lorem ipsum\n ");
}
archivo.end();
