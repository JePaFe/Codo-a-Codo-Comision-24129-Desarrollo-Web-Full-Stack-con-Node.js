// function saludar(nombre) {
//   console.log("Hola", nombre);
// }

// saludar("Juan");
// saludar("Maria");
// saludar();

// ---

// function tablaCinco() {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${i} * 5 = ${i * 5}`);
//   }
// }

// tablaCinco();
// tablaCinco();

// Parámetros

// function sumar(num1, num2) {
//   //   let resultado = num1 + num2;
//   //   return resultado;

//   return num1 + num2;
// }

// let suma;

// suma = sumar(4, 6);
// suma += 1;
// console.log(suma);

// suma = sumar(15, 30);
// console.log(suma);

// ---

// function tablaMultiplicar(multiplicador, limite = 10) {
//   for (let i = 1; i <= limite; i++) {
//     console.log(`${i} * ${multiplicador} = ${i * multiplicador}`);
//   }
// }

// tablaMultiplicar(3);
// tablaMultiplicar(5, 12);
// tablaMultiplicar(7, 5);

// ---

// function saludar(nombre, apellido) {
//   console.log("Hola", nombre, apellido);
// }

// let nombre = prompt("Ingrese su nombre: ");
// saludar(nombre, "Perez");

// ---

function numeroMinimo(num1, num2) {
  if (num1 < num2) {
    return num1;
  }

  return num2;
}
let minimo;

minimo = numeroMinimo(2, 5);
console.log(minimo);

minimo = numeroMinimo(7, 5);
console.log(minimo);

minimo = numeroMinimo(3, 3);
console.log(minimo);
