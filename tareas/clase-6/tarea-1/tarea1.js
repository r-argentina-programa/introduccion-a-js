// // TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
// // Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
// // Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

const $btnAgregar = document.querySelector('#agregar');
const $btnCalcular = document.querySelector('#calcular');
const $btnBorrar = document.querySelector('#borrar');
const $edades = document.querySelector('#edades');
const $mayorEdad = document.querySelector('#mayor-edad');
const $menorEdad = document.querySelector('#menor-edad');
const $promedio = document.querySelector('#promedio');
let edad = [];

$btnAgregar.onclick = function() {
  function creaEntradas() {
    const $integrantes = Number(document.querySelector('#integrantes').value);
    let nuevaEntrada;

    while ($edades.hasChildNodes()) {
      $edades.removeChild($edades.lastChild);
    }

    for (let i = 0; i < $integrantes; i++) {
      $edades.appendChild(document.createTextNode('Integrante ' + (i + 1)));
      nuevaEntrada = document.createElement('input');
      nuevaEntrada.setAttribute('type', 'number');
      nuevaEntrada.className = 'entradas';
      $edades.appendChild(nuevaEntrada);
    }
  }

  creaEntradas();

  $btnCalcular.onclick = calculaDatos;

  function calculaDatos() {
    function promedio() {
      let promedio = 0;
      let edadesEntradas = document.querySelectorAll('.entradas');

      for (let i = 0; i < edadesEntradas.length; i++) {
        promedio += Number(edadesEntradas[i].value) / edadesEntradas.length;
      }
      $promedio.textContent = promedio;
    }

    promedio();

    function mayorEdad() {
      let edadesEntradas = document.querySelectorAll('.entradas');

      let edadMayor = 0;

      for (let i = 0; i < edadesEntradas.length; i++) {
        //convierte valores del NodeList a numeros
        edad.push(Number(edadesEntradas[i].value));
      }
      for (let i = 0; i < edad.length; i++) {
        if (edad[i] > edadMayor) {
          edadMayor = edad[i];
        }
      }
      $mayorEdad.textContent = edadMayor;
    }
    mayorEdad();

    function menorEdad() {
      let edadMenor = edad[1];
      for (let i = 0; i < edad.length; i++) {
        if (edad[i] < edadMenor) {
          edadMenor = edad[i];
        }
      }
      $menorEdad.textContent = edadMenor;
      console.log(edadMenor);
    }

    menorEdad();
  }
};

$btnBorrar.onclick = function() {
  location.reload();
};
