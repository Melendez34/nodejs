const promesas = require("fs").promises;

promesas
  .copyFile("./destino.tx", "./copia_destino.txt")
  .then(() => {
    console.log("copia terminada");
  })
  .catch(() => {
    console.log("Error");
  })
  .finally(() => {
    console.log("se ejecuta en todos lo casos esta linea de codigo");
  });
