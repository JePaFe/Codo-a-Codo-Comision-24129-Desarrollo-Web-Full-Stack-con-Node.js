// let edad = 10;
// let mensaje;

// // if (edad >= 13) {
// //   mensaje = "Puedes registrarte";
// // } else {
// //   mensaje = "No se puede registrar";
// // }

// mensaje = edad >= 13 ? "Puedes registrarte" : "No se puede registrar";

// console.log(mensaje);

// ---

// let cantidad = 2;
// let mensaje;

// if (cantidad >= 9) {
//   mensaje = "Descuento del 20%";
// } else if (cantidad >= 6) {
//   mensaje = "Descuento del 15%";
// } else if (cantidad >= 3) {
//   mensaje = "Descuento del 10%";
// } else {
//   mensaje = "Precio sin descuento";
// }

// console.log(mensaje);

// let color = "Orange";

// switch (color) {
//   case "Red":
//     console.log("Rojo");
//     break;
//   case "Green":
//     console.log("Verde");
//     break;
//   case "Blue":
//     console.log("Azul");
//     break;
//   default:
//     console.log("No se reconoce el color");
// }

// let num = 5;

// if (num >= 4 && num <= 8) {
//   console.log("El numero esta entre 4 y 8");
// }

let edad = 10;
let autorizacion = true; // Autorización de padres o tutores
let mensaje;

if (edad >= 13 || autorizacion == true) {
  mensaje = "Puedes registrarte";
} else {
  mensaje = "No se puede registrar";
}

console.log(mensaje);
