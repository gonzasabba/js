
const monto = Number(prompt('Ingrese el monto del préstamo:'));
const plazo = Number(prompt('Ingrese el plazo del préstamo en meses (3, 6, 9, 12):'));

let interes = 0;
let montoConInteres = monto;

if (monto < 10000) {
  interes = 0.1;
} else if (monto >= 10001 && monto <= 49999) {
  interes = 0.15;
} else {
  interes = 0.2;
}

switch (plazo) {
  case 3:
    montoConInteres = monto * (1 + interes) ** 3;
    break;
  case 6:
    montoConInteres = monto * (1 + interes) ** 6;
    break;
  case 9:
    montoConInteres = monto * (1 + interes) ** 9;
    break;
  case 12:
    montoConInteres = monto * (1 + interes) ** 12;
    break;
  default:
    alert('Plazo ingresado incorrecto.');
}

const resultados = [
  `Monto del préstamo: $${monto}`,
  `Interés aplicado: ${interes * 100}%`,
  `Plazo del préstamo: ${plazo} meses`,
  `Monto con interés: $${montoConInteres}`
];

console.log(resultados);