
const cantidadPersonas = prompt("Ingrese la cantidad de personas:");

let sumaEdades = 0;

for (let i = 0; i < cantidadPersonas; i++) {
    const edad = parseInt(prompt(`Ingrese la edad de la persona ${i+1}:`));
    sumaEdades += edad;
}

const promedioEdades = sumaEdades / cantidadPersonas;

alert(`La edad promedio de las ${cantidadPersonas} personas registradas es ${promedioEdades}.`);