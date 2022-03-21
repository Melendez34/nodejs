import { createServer } from "http";

var servidor = createServer(function (peticion, respuesta) {
  console.log("Peticion Web");
  respuesta.writeHead(200, { "content-type": "text/html" });
  respuesta.write("Respuesta de direccion: " + peticion.url);
  respuesta.write(peticion.url);
  respuesta.end();
});

servidor.listen(3030);

console.log("Ejecutando servidor Nodejs");
