const h2 = document.querySelector(".primer-subtitulo");
console.log(h2);

// h2.onclick = () => {
//   console.log("Click en h2 version 1");
// };

// h2.onclick = () => {
//   console.log("Click en h2 version 2");
// };

const clickUno = () => {
  console.log("Click en h2 version 1");
};

h2.addEventListener("click", clickUno);

h2.addEventListener("click", () => {
  console.log("Click en h2 version 2");
});
