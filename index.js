function calcular() {
  const monto = montoInput.value;
  const plazo = plazoInput.value;
  const cuotas = cuotasInput.value;
  const interes = interesInput.value;

  if (monto === "" || plazo === "" || cuotas === "" || interes === "") {
    alert("Por favor, ingrese valores válidos en todos los campos.");
    return;
  }

  if (monto <= 0) {
    alert("El monto debe ser mayor a 0.");
    return;
  }

  if (plazo < 1 || plazo > 5) {
    alert("El plazo debe estar entre 1 y 5 años.");
    return;
  }

  const opcionesValidas = ["mensual", "bimestral", "semestral"];
  if (!opcionesValidas.includes(cuotas)) {
    alert("Las cuotas deben ser mensuales, bimestrales o semestrales.");
    return;
  }

  if (interes <= 0) {
    alert("La tasa de interés debe ser mayor a 0.");
    return;
  }

  let total = 0;
  const mesesPorAnio = 12;
  const cuotasPorAnio = cuotas === "mensual" ? mesesPorAnio : cuotas === "bimestral" ? mesesPorAnio / 2 : mesesPorAnio / 6;
  const tasaPeriodica = interes / 100 / cuotasPorAnio;
  const cuotasTotales = plazo * cuotasPorAnio;
  total = monto * ((tasaPeriodica * Math.pow(1 + tasaPeriodica, cuotasTotales)) / (Math.pow(1 + tasaPeriodica, cuotasTotales) - 1));
  totalInput.value = "$" + total.toFixed(2);
}

function borrar() {
  fechaInput.value = "";
  montoInput.value = "";
  plazoInput.value = "";
  cuotasInput.value = "";
  interesInput.value = "";
  totalInput.value = "";
}


const fechaInput = document.getElementById("fecha");
const montoInput = document.getElementById("monto");
const plazoInput = document.getElementById("plazo");
const cuotasInput = document.getElementById("cuotas");
const interesInput = document.getElementById("interes");
const totalInput = document.getElementById("total");
const calcularButton = document.getElementById("calcular");
const borrarButton = document.getElementById("borrar");

calcularButton.addEventListener("click", calcular);
borrarButton.addEventListener("click", borrar);


let prestamos = [];

function guardarPrestamo() {
  let fecha = document.getElementById("fecha").value;
  let monto = document.getElementById("monto").value;
  let plazo = document.getElementById("plazo").value;
  let cuotas = document.getElementById("cuotas").value;
  let interes = document.getElementById("interes").value;
  let moneda = document.getElementById("moneda").value;
  let total = document.getElementById("total").value;


  let prestamo = {
    fecha: fecha,
    monto: monto,
    plazo: plazo,
    cuotas: cuotas,
    interes: interes,
    moneda: moneda,
    total: total,
  };

  prestamos.push(prestamo);
  console.log("Préstamo guardado:", prestamo);
}

let btnGuardar = document.getElementById("guardar");
btnGuardar.addEventListener("click", guardarPrestamo);

