/*
 * variables con nodejs */
let numero = ["uno", "dos", 3];
let dato = "Aloha";
dato = 5;
console.log(typeof numero[2]);
/*
 * objetos con nodejs */
let curso = {
  tema: "NodeJS",
  leccion: "datos compuestos",
};
console.log(curso.tema);
/*
 * funciones */
function saludo() {
  return "Hola Mundo";
}
/*
 * funciones y metodos */
let calcular = {
  doble: function (valor) {
    return valor * 2;
  },
  dividir: function (valor) {
    return valor / 2;
  },
};
console.log(calcular.doble(20), calcular.dividir(20));
