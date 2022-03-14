//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const $listaNumerica = document.querySelectorAll('li'); // Es una lista de nodos
const listaNumerica = convertirEnArray($listaNumerica);

const $botonCalcular = document.querySelector('#calcular');

$botonCalcular.onclick = function () {
  document.querySelector('#numero-promedio').textContent = obtenerPromedio(listaNumerica);
  document.querySelector('#numero-pequenio').textContent = obtenerNumeroMenor(listaNumerica);
  document.querySelector('#numero-grande').textContent = obtenerNumeroMayor(listaNumerica);
  document.querySelector('#numero-frecuente').textContent = obtenerNumeroFrecuente(listaNumerica);

  return false;
};

function convertirEnArray(li) {
  let array = [];
  for (let i = 0; i < li.length; i++) {
    array.push(Number(li[i].textContent));
  }
  return array;
}

function obtenerPromedio(array) {
  let arrayPromedio = 0;
  for (let i = 0; i < array.length; i++) {
    arrayPromedio = arrayPromedio + array[i];
  }
  return arrayPromedio / array.length;
}

function obtenerNumeroMenor(array) {
  let menorNumero = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < menorNumero) {
      menorNumero = array[i];
    }
  }
  return menorNumero;
}

function obtenerNumeroMayor(array) {
  let mayorNumero = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > mayorNumero) {
      mayorNumero = array[i];
    }
  }
  return mayorNumero;
}

function obtenerNumeroFrecuente(array) {
  let numeroMasFrecuente;
  let contador = 0;
  for (let i = 0; i < array.length; i++) {
    let cantidadDeRepeteciones = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[j] === array[i]) {
        cantidadDeRepeteciones++;
      }
      if (cantidadDeRepeteciones > contador) {
        numeroMasFrecuente = array[j];
        contador = cantidadDeRepeteciones;
      }
    }
  }
  return numeroMasFrecuente;
}
