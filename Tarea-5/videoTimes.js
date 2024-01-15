// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const $botonCalcularTiempoTotal = document.querySelector(
  "#calcular-tiempo-total"
);
const $botonEnviar = document.querySelector("#enviar");
const $totalDeCampos = document.querySelector("div");

let horas = 0;
let minutos = 0;
let segundos = 0;

$botonEnviar.onclick = function () {
  const cantidadDeClases = Number(
    document.querySelector("#cantidad-de-videos").value
  );

  for (let i = 0; i < cantidadDeClases; i++) {
    let $etiqueta = document.createElement("label");
    $etiqueta.textContent = `Clase ${i + 1}: `;

    $totalDeCampos.appendChild($etiqueta);

    crearInputs();
    const $saltoDeLinea = document.createElement("br");
    $totalDeCampos.appendChild($saltoDeLinea);
  }

  return false;
};

$botonCalcularTiempoTotal.onclick = function () {
  
  const tiempoTotal = [];

  calcularTiempoTotal(tiempoTotal);
  const $mensaje = document.querySelector("#tiempo-total");

  
  const tiempoTotalMensaje = `${$mensaje.textContent} ${tiempoTotal.join(":")}`;
  
  $mensaje.textContent = tiempoTotalMensaje;

  console.log($mensaje.textContent);
  document.querySelector("h2").style.display = "none";
  
  return false;
};

function crearInputs() {
  const cantidadDeCampos = 3;
  const textoParaElUsuario = ["horas", "minutos", "segundos"];

  for (let i = 0; i < cantidadDeCampos; i++) {
    const $campo = document.createElement("input");
    $campo.type = "number";
    $campo.className = textoParaElUsuario[i];
    $campo.placeholder = textoParaElUsuario[i];
    $totalDeCampos.appendChild($campo);
  }
}

function calcularTiempoTotal(tiempoTotal) {
  const $horas = document.querySelectorAll(".horas");
  const $minutos = document.querySelectorAll(".minutos");
  const $segundos = document.querySelectorAll(".segundos");

  let acumSegundos = 0;
  let acumMinutos = 0;
  let acumHoras = 0;

  const MAXIMO_MINUTOS_Y_SEGUNDOS = 60;

  for(let i = 0; i < $segundos.length; i++){
    acumSegundos += Number($segundos[i].value);
    acumMinutos += Number($minutos[i].value);
    acumHoras += Number($horas[i].value); 
  }

  acumMinutos += acumHoras * MAXIMO_MINUTOS_Y_SEGUNDOS;
  acumSegundos += acumMinutos * MAXIMO_MINUTOS_Y_SEGUNDOS;

  acumHoras = 0;
  acumMinutos = 0;

  while(acumSegundos >= MAXIMO_MINUTOS_Y_SEGUNDOS){
    acumMinutos++;
    acumSegundos -= MAXIMO_MINUTOS_Y_SEGUNDOS;
  }

  while(acumMinutos >= MAXIMO_MINUTOS_Y_SEGUNDOS){
    acumHoras++;
    acumMinutos -= MAXIMO_MINUTOS_Y_SEGUNDOS;
  }
  
  tiempoTotal.push(acumHoras); 
  tiempoTotal.push(acumMinutos);
  tiempoTotal.push(acumSegundos);
  
  return tiempoTotal;
}

