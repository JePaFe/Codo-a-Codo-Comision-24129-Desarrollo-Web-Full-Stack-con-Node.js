let texto = "  UN TEXTO  ";
let textoObjeto = new String("Otros textos");

// console.log(texto, typeof texto);
// console.log(textoObjeto, typeof textoObjeto);

// console.log(texto.length, textoObjeto["length"]);

// console.log(texto.charAt(0), textoObjeto.charAt(11));

// console.log(texto.indexOf("ex"));

// let nuevoTexto = texto.concat(" ...");
// let nuevoTexto = texto + " ...";
// console.log(texto, nuevoTexto);

// console.log(texto.repeat(3));

// let minusculas = texto.toLowerCase();
// minusculas = minusculas.replace("u", "U");
// console.log(minusculas);

let textoTrim = texto.trim();
console.log(textoTrim, texto);

console.log(textoObjeto.substring(6, 9));
