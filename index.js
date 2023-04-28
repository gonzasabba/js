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
  totalInput.value =  total.toFixed(2);
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
const guardarButton = document.getElementById("guardar");
const contTabla = document.getElementById("Tabla");

calcularButton.addEventListener("click", calcular);
borrarButton.addEventListener("click", borrar);


let CatPrestamos = [];

class Prestamo{
  constructor(monto, plazo, cuotas, interes, total, id){
    this.monto = parseInt(monto);
    this.plazo = parseInt(plazo);
    this.cuotas = cuotas;
    this.interes = parseInt(interes);
    this.total = parseInt(total);
    this.id = id;
  }

  asignarId(array){
    this.id = array.lenght;
  }
}

function guardarPrestamo(CatPrestamos) {

  const prestamo = new Prestamo(montoInput.value, plazoInput.value, cuotasInput.value,
     interesInput.value, totalInput.value);

  CatPrestamos.push(prestamo);
  prestamo.asignarId(CatPrestamos)

 
}

function guardarEnStorage(CatPrestamos){
  localStorage.setItem('Prestamos', JSON.stringify(CatPrestamos));
}



function crearTabla(arrayElementos, contenedorHtml){
  const tabla = document.createElement("table");
  const encabezado = document.createElement("tr");
  encabezado.className = "encabezado"
  encabezado.innerHTML = `
    <th>Monto</th>
    <th>Cuotas</th>
    <th>Plazo</th>
    <th>Interes</th>
    <th>Total</th>
  `;
  tabla.appendChild(encabezado);

  for(const elemento of arrayElementos){
    const fila = document.createElement("tr");
    fila.className = "fila" 
    fila.innerHTML = `
      
      <td>${elemento.monto}</td>
      <td>${elemento.cuotas}</td>
      <td>${elemento.plazo}</td>
      <td>${elemento.interes}</td>
      <td>${elemento.total}</td>
    `;
    tabla.appendChild(fila);
  }

  contenedorHtml.innerHTML = "";
  contenedorHtml.appendChild(tabla);
}

guardarButton.onclick = (e) => {
  e.preventDefault();
  guardarPrestamo(CatPrestamos);
  guardarEnStorage(CatPrestamos);
  crearTabla(CatPrestamos, contTabla);
};

