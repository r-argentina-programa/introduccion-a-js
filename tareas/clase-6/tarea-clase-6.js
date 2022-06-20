/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

// tratar de descomponer todo en funciones mas chicas y atomicas, ir armando "una historia", donde las bases sean
//funciones concretas que hagan una cosa en particular y lo mas "alto" se sirva de esas funciones
//Lo idea seria solo leer nombres de funciones que me "cuentan que hacen en forma de historia" sin tener que preocuparme por los detalles de como funcionan.
//usar su resolucion como ejemplo a seguir.

//él uso un form para englobar el html y por eso fue usando function(event) y event.preventDefault() para evitar que se submitee y se recargue.

document.querySelector('#siguiente-paso').onclick = function(event) {
  const $cantidadIntegrantes = document.querySelector('#cantidad-integrantes');
  const cantidadIntegrantes = Number($cantidadIntegrantes.value);

  borrarIntegrantesAnteriores();
  crearIntegrantes(cantidadIntegrantes);

  event.preventDefault();
};

document.querySelector('#calcular').onclick = function(event) {
  const numeros = obtenerEdadesIntegrantes();
  const salarios = obtenerSalariosIntegrantes();
  mostrarEdad('mayor', obtenerMayorNumero(numeros));
  mostrarEdad('menor', obtenerMenorNumero(numeros));
  mostrarEdad('promedio', obtenerPromedio(numeros));
  mostrarSalario('mayor', obtenerMayorSalario(salarios));
  mostrarSalario('menor', obtenerMenorSalario(salarios));
  mostrarSalario('promedio', obtenerSalarioPromedio(salarios));
  mostrarSalario('promedio-mensual', obtenerSalarioPromedioMensual(salarios));
  mostrarResultados();

  event.preventDefault();
};

document.querySelector('#resetear').onclick = resetear;
//Es lo mismo que, solo que ya esta declarada mas abajo:
/* document.querySelector('#resetear').onclick = resetear() {
  resetear()
}; */

function borrarIntegrantesAnteriores() {
  const $integrantes = document.querySelectorAll('.integrante');
  for (let i = 0; i < $integrantes.length; i++) {
    $integrantes[i].remove();
  }
};

function crearIntegrantes(cantidadIntegrantes) {

  if (cantidadIntegrantes > 0) {
    mostrarBotonCalculo();
  } else {
    resetear();
  }

  for (let i = 0; i < cantidadIntegrantes; i++) {
    crearIntegrante(i);
  }
};

function crearIntegrante(indice) {
  const $div = document.createElement('div');
  const $divSalario = document.createElement('div');
  $div.className = 'integrante';
  $divSalario.className = 'salario';

  const $label = document.createElement('label');
  $label.textContent = 'Edad del integrante #: ' + (indice + 1);
  const $input = document.createElement('input');
  $input.type = 'number';

  const $labelSalario = document.createElement('label');
  const $inputSalario = document.createElement('input');
  $inputSalario.type = 'number';
  $labelSalario.textContent = 'Salario anual: ';

  $div.appendChild($label);
  $div.appendChild($input);
  $divSalario.appendChild($labelSalario)
  $divSalario.appendChild($inputSalario);

  const $integrantes = document.querySelector('#integrantes');
  $integrantes.appendChild($div);
  $integrantes.appendChild($divSalario);
};

function resetear() {
  borrarIntegrantesAnteriores();
  ocultarBotonCalculo();
  ocultarResultados();
};

function ocultarBotonCalculo() {
  document.querySelector('#calcular').className = 'oculto';
};

function mostrarBotonCalculo() {
  document.querySelector('#calcular').className = '';
};

function ocultarResultados() {
  document.querySelector('#analisis').className = 'oculto';
  document.querySelector('#calculo-salarios').className = 'oculto';
};

function mostrarResultados() {
  document.querySelector('#analisis').className = '';
  document.querySelector('#calculo-salarios').className = '';
};

function mostrarEdad(tipo, valor) {
  document.querySelector(`#${tipo}-edad`).textContent = valor;
};

function mostrarSalario(tipo, valor) {
  document.querySelector(`#${tipo}-salario`).textContent = valor;
};

function obtenerEdadesIntegrantes() {
  const $integrantes = document.querySelectorAll('.integrante input');
  const edades = [];
  for (let i = 0; i < $integrantes.length; i++) {
    edades.push(Number($integrantes[i].value));
  }
  return edades;
};

function obtenerSalariosIntegrantes() {
  const $salariosIntegrantes = document.querySelectorAll('.salarios input');
  const salarios = [];

  for (let i = 0; i < $salariosIntegrantes.length; i++) {
    salarios.push(Number($salariosIntegrantes[i].value));
  }
  return salarios;
};

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels 
para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, 
menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

/* if ($integrantes[i].value ===""){
    continue;
}

//O...

if($integrantes[i].value !== ""){
    Array.push(blablabla);
} */