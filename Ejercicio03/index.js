/*3) Dado el siguiente array de objetos
  
  Crea una funcion que reciba el array de objetos e imprima cada una de sus nombres,
  edades y habilidades */

function imprProp(array) {
  //El for of se encarga de analizar o iterar el array
  //El for in esta encargando de analizar o iterar los objetos
  for (const obj of array) {
    for (const propiedad in obj) {
      console.log(`${propiedad}: ${obj[propiedad]}`);
    }
    console.log("---");
  }
}

let personas = [
  { nombre: "Juan", edad: 25, habilidades: ["Programación", "Cocina"] },
  { nombre: "Carlos", edad: 30, habilidades: ["Diseño", "Enseñanza"] },
  { nombre: "Ana", edad: 20, habilidades: ["Diseño", "Cocina"] },
];

imprProp(personas);
