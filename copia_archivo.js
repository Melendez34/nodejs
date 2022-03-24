//importacion de los metodos de fs a una variable
var fs = require("fs");
// Metodo copyFile para hacer copias de un archivo en una determinada ruta
fs.copyFile(
  "./assets/archivos/archivoCreado.txt",
  "./assets/archivos/archivo_copia.txt",
  (error) => {
    if (error) {
      console.log("Error al copiar el archivo");
      throw error;
    } else {
      console.log("Copia realizada ");
    }
  }
);

//Metodo unlink para eliminar un archivo de una direccion dada
fs.unlink("./assets/archivos/archivo1.txt", (error) => {
  if (error) {
    console.log(error);
    console.error("Hubo un error");
  } else {
    console.log("OK se elimino el archivo");
  }
});

//Juntando metodos en procesos asincronicos
fs.copyFile(
  "./assets/archivos/archivo_copia.txt",
  "./assets/otros_archivos/texto_copia.txt",
  (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ok");
    }
  }
);

const copiarArchivo = (rutaOriginal, nuevaRuta, archivoParaCopiar) => {
  fs.copyFile(
    rutaOriginal + "/" + archivoParaCopiar,
    nuevaRuta + "/" + archivoParaCopiar,
    (error) => {
      if (error) {
        console.log("Error");
      } else {
        eliminarArchivo(rutaOriginal, archivoParaCopiar);
      }
    }
  );
};

const eliminarArchivo = (rutaOriginal, archivoParaCopiar) => {
  fs.unlink(rutaOriginal + "/" + archivoParaCopiar, (error) => {
    if (error) {
      console.log("Error al eliminar");
    } else {
      console.log("Borrar Ok");
    }
  });
};

copiarArchivo("./assets/archivos", "./assets/js", "numero.txt");
