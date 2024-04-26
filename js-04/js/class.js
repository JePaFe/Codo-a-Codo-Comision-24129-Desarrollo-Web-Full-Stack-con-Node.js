class Auto {
  constructor(marca, modelo, color = "Rojo") {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
  }

  info() {
    console.log(`Marca: ${this.marca}, Color: ${this.color}`);
  }
}

let auto1 = new Auto("Ford", 2020);
console.log(auto1, auto1.color);
auto1.info();

// let num = new Number(1);
// num.info();

let auto2 = new Auto("Fiat", 2022, "Azul");
// auto2.color = "Azul";
auto2.puertas = 5;
console.log(auto2);
auto2.info();
