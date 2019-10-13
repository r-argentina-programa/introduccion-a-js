//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const $agregarClase = document.querySelector('#agregarClase');
const $calcular = document.querySelector('#calcular');
const $borrar = document.querySelector('#borrarTodo');
const $total = '';

$agregarClase.onclick = function() {
  agregaClase();
};

$calcular.onclick = function() {
  calculaTotal();
  $calcular.disabled = true;
};

$borrar.onclick = function() {
  location.reload();
};

function agregaClase() {
  const $li = document.querySelector('li');
  const copiaClase = $li.cloneNode(true);
  $li.after(copiaClase);
  const $ol = document.querySelector('ol');
  const newClass = $ol.appendChild($li)[0];
  $calcular.disabled = false;
}

function calculaTotal() {
  const $li = document.querySelectorAll('li');
  const $horas = document.querySelectorAll('.horas');
  const $minutos = document.querySelectorAll('.minutos');
  const $segundos = document.querySelectorAll('.segundos');

  let horasTotal = 0;
  let minutosTotal = 0;
  let segundosTotal = 0;

  for (let i = 0; i < $li.length; i++) {
    horasTotal += Number($horas[i].value);
    minutosTotal += Number($minutos[i].value);
    segundosTotal += Number($segundos[i].value);
  }

  const $total = document.querySelector('#total');
  const resultado = document.createElement('strong');

  resultado.textContent = ` ${horasTotal}h : ${minutosTotal}m : ${segundosTotal}s`;
  $total.append(resultado);
}
