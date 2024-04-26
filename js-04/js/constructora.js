function Auto(marca, modelo, color = "Rojo") {
  this.marca = marca;
  this.modelo = modelo;
  this.color = color;
}

Auto.prototype.info = function () {
  console.log(`Marca: ${this.marca}, Color: ${this.color}`);
};

let auto1 = new Auto("Ford", 1990, "Gris");
console.log(auto1);
auto1.info();
