function numeroAleatorio() {
  return Promise((res, reject) => {
    setTimeout(() => {
      res(Math.floor(Math.random() * 100));
    }, 2000);
  });
}

function resultado() {
  console.log("Resultado invocado");
  numeroAleatorio();
}

resultado();
