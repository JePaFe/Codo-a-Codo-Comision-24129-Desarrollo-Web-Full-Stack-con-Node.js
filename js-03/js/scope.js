let apellido = "Perez";
let nombre = "Maria";

function mensaje() {
  let nombre = "Juan";
  const fnTexto = "Hola";
  return `${fnTexto} ${nombre} ${apellido}`;
}

let texto = mensaje();
console.log(texto);

console.log(apellido);
console.log(fnTexto);
console.log(nombre);
