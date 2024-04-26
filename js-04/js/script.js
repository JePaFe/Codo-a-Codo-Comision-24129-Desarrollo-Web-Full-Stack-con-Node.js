// let name = "Usuario 1";
// let password = "idsjkf-hjk32j4h32";
// let email = "x@x.com";
// let admin = true;

// const user = new Object();

// user.name = "Usuario 1";
// user.password = "idsjkf-hjk32j4h32";
// user.email = "x@x.com";
// user.admin = true;

let algo = "Un dato";

const usuario = {
  id: 1,
  name: "Usuario 1",
  password: "idsjkf-hjk32j4h32",
  email: "x@x.com",
  admin: true,
  algo: algo,
  otro: undefined,
  address: {
    calle: "Falsa",
    numero: 123,
  },
  informacion() {
    console.log(`Nombre: ${this.name}, Correo: ${this.email}`);
  },
};

// console.log(user.name, user.address.calle);

// console.log(user["email"], user.address["numero"]);

usuario.informacion();

console.log(usuario);
