// 2) Crea una función que reciba un array de objetos y los imprima

function imprProp(array) {
  //El for of se encarga de analizar o iterar el array
  //El for in se esta encargando de analizar o iterar los objetos
  for (const obj of array) {
    for (const propiedad in obj) {
      console.log(`${propiedad}: ${obj[propiedad]}`);
    }
    console.log("---");
  }
}

let frutas = [
  { nombre: "Manzana", color: "Rojo", precio: 1.5 },
  { nombre: "Pera", color: "Verde", precio: 1.2 },
  { nombre: "Melon", color: "Amarillo", precio: 3.0 },
  { nombre: "Fresa", color: "Rojo", precio: 2.0 },
  { nombre: "Piña", color: "Amarillo", precio: 2.5 },
];

imprProp(frutas);
