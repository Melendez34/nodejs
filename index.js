var http = require("http");

var servidor = http.createServer(function (peticion, respuesta) {
  console.log("Peticion Web");
  respuesta.writeHead(200, { "content-type": "text/html" });
  respuesta.write("Respuesta de direccion: " + peticion.url);
});

servidor.listen(3030);

console.log("Ejecutando servidor Nodejs");
