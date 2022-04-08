const fs = require("fs");
const { transform, Transform } = require("stream");

const streamLectura = fs.createReadStream("./base.txt");
const streamEscritura = fs.createWriteStream("./destino.txt");

const filtro = new Transform({
  transform(data, encoding, callback) {
    this.push(data.toString().toUpperCase());
    callback();
  },
  final(callback) {
    callback();
  },
});

streamLectura.pipe(filtro).pipe(streamEscritura);
