// const unArray = new Array("a", "b", "c");
// console.log(unArray);

// const letras = ["a", "b", "c"];
// console.log(letras);

// console.log(letras[1]);
// // console.log(letras[5]);

// console.log(letras.length);
// console.log(letras[letras.length - 1]);

// Ciclos

// const dias = ["Martes", "Miércoles", "Friday", "Sábado"];

// for (let i = 0; i < dias.length; i++) {
//     console.log(dias[i])
// }

// dias[4] = "Domingo";
// dias[dias.length] = "Domingo";
// dias.push("Domingo");

// let dia;
// dia = dias.pop();

// dias.unshift("Lunes");
// dia = dias.shift();

// console.log(dia, dias);

// ---

// const frutas = ["Manzana", "Plátano", "Naranja"];

// for (let i = 0; i < 3; i++) {
//   console.log(frutas[i]);
// }

// for (let i of frutas) {
//   console.log(i, frutas[i]); // Elemento
// }

// for (let i in frutas) {
//   console.log(i, frutas[i]); // Indice
// }

// const masFrutas = frutas.concat(["Sandia", "Pera"]);
// console.log(masFrutas);

// console.log(frutas.indexOf("Plátano"));

// ---

// const dias = ["Martes", "Miércoles", "Friday", "Sábado"];

// // console.log(dias.slice(1), dias);

// dias.splice(0, 0, "Lunes");
// dias.splice(3, 1, "Jueves", "Viernes");
// dias.splice(dias.length, 0, "Domingo");

// console.log(dias.sort().reverse());

// const numeros = [5, 1, 10, 6, 6, 30, 20, 100, 3];

// function compareFn(a, b) {
//   if (a < b) {
//     return -1;
//   } else if (a > b) {
//     return 1;
//   }
//   // a must be equal to b
//   return 0;
// }

// console.log(numeros.sort((a, b) => a - b));

// Métodos para recorrer

// const numeros = [1, 2, 3, 4, 5, 6];

// function mostrar(item) {
//   console.log(item);
// }

// const mostrar = function (item) {
//   console.log(item);
// };

// const mostrar = item => console.log(item);

// numeros.forEach(item => console.log(item));

// const multiplos = numeros.map((item) => item * 5);
// console.log(numeros, multiplos);

// Filtro

// function fnFiltro(numero) {
//     if (numero % 2 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function fnFiltro(numero) {
//   if (numero % 2 == 0) {
//     return true;
//   }

//   return false;
// }

// Opción complicada
// function fnFiltro(numero) {
//   return !(numero % 2);
// }

// function fnFiltro(numero) {
//   return numero % 2 == 0;
// }

// const fnFiltro = function (numero) {
//   return numero % 2 == 0;
// };

// const fnFiltro = numero => numero % 2 == 0;

// const pares = numeros.filter(numero => numero % 2 == 0);
// console.log(numeros, pares);

// ---

// const letras = ["a", "b", "c"];
// console.log(
//   letras,
//   letras.find((letra) => letra == "b"),
//   letras.findIndex((letra) => letra == "z")
// );

// ---

const user = {
  nombre: "Juan",
  apellido: "Perez",
  dni: 32456789,
};

for (let key in user) {
  console.log(key, user[key]);
}
