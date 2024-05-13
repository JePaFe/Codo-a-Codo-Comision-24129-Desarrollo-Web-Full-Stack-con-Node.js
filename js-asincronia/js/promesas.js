// const promesa = new Promise((resolve, reject) => {
//   const resulto = true;

//   if (resulto) {
//     resolve("Calculo finalizado");
//   } else {
//     reject("Error en el calculo");
//   }
// });

// // console.log(promesa);
// console.log(1);

// promesa
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// console.log(2);

// ---

function multiplicar(num1, num2) {
  //   if (typeof num1 != "number" || typeof num2 != "number") {
  //     return Promise.reject("Los dos parámetros tienen que ser números");
  //   }

  return new Promise((resolve, reject) => {
    if (typeof num1 != "number" || typeof num2 != "number") {
      return reject("Los dos parámetros tienen que ser números");
    }
    setTimeout(() => {
      resolve({
        num1: num1,
        num2: num2,
        result: num1 * num2,
      });
    }, Math.floor(Math.random() * (3000 - 1 + 1) + 1));
  });
}

// multiplicar(1, 2)
//   .then((res) => {
//     console.log(`${res.num1} x ${res.num2} = ${res.result}`);
//   })
//   .catch((error) => console.log(error));

// multiplicar(2, 2)
//   .then((res) => {
//     console.log(`${res.num1} x ${res.num2} = ${res.result}`);
//   })
//   .catch((error) => console.log(error));

// multiplicar(3, 2)
//   .then((res) => {
//     console.log(`${res.num1} x ${res.num2} = ${res.result}`);
//   })
//   .catch((error) => console.log(error));

multiplicar(1, 2)
  .then((res) => {
    console.log(`${res.num1} x ${res.num2} = ${res.result}`);
    return multiplicar(2, 2);
  })
  .then((res) => {
    console.log(`${res.num1} x ${res.num2} = ${res.result}`);
    return multiplicar(3, 2);
  })
  .then((res) => {
    console.log(`${res.num1} x ${res.num2} = ${res.result}`);
  })
  .catch((error) => console.log(error));
