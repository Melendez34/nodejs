const fs = require("fs");

const streamLectura = fs.createReadStream("ls-text.txt", { encoding: "utf-8" });

streamLectura
  .on("open", () => {
    console.log("comenzando lectura de archivo");
  })
  .on("data", () => {
    console.log("---");
  })
  .on("close", () => {
    console.log("Archivo cerrado");
  })
  .on("error", () => {
    console.log("Hubo un error!");
  });
