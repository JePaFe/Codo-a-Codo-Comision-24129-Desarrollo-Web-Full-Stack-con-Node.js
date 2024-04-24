// function sumar(a, b) {
//   let suma = a + b;
//   return suma;
// }

// const sumar = function (a, b) {
//   let suma = a + b;
//   return suma;
// };

// const sumar = (a, b) => {
//   let suma = a + b;
//   return suma;
// };

// const sumar = (a, b) => {
//   return a + b;
// };

// const sumar = (a, b) => a + b;

// let resultado = sumar(6, 6);
// console.log(resultado);

// ---

// function saludar() {
//   console.log("Hola");
// }

// const saludar = function () {
//   console.log("Hola");
// };

// const saludar = () => console.log("Hola");

// saludar();

// ---

// function saludar(nombre) {
//   return `Hola ${nombre}`;
// }

// const saludar = function (nombre) {
//   return `Hola ${nombre}`;
// };

const saludar = nombre => `Hola ${nombre}`;

let mensaje = saludar("Juan");
console.log(mensaje);
