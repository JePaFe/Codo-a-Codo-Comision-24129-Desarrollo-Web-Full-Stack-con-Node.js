let parrafos = document.getElementsByTagName("p");
// console.log(parrafos);

for (let i = 0; i < parrafos.length; i++) {
  console.log(parrafos[i]);
  parrafos[i].innerHTML = `<strong>Linea ${i + 1}:</strong> ${
    parrafos[i].textContent
  }`;
}

parrafos = document.getElementsByClassName("segundo-parrafo");
// console.log(parrafos);

let input = document.getElementsByName("nombre");
// console.log(input);

input = document.getElementById("nombres");
// console.log(input);
