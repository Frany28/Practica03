/*1) Crea una función que reciba un objeto e imprima todas sus propiedades y valores
  pero debe detenerse si encuentra la propiedad 'edad'*/

function imprimirPropiedades(obj) {
  //i:Indice obj:Objeto Persona
  for (let i in obj) {
    if (i === "edad") {
      break;
    }
    console.log(`${i}: ${obj[i]}`);
  }
}

const persona = {
  nombre: "Juan",
  apellido: "Pérez",
  edad: 30,
  ciudad: "Madrid",
};

imprimirPropiedades(persona);
