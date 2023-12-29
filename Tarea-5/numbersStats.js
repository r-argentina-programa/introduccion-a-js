// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const numeros = [];

const $listaDeNumeros = document.querySelectorAll("li");

obtenerNumeros(numeros);

document.querySelector('#promedio').textContent += calcularPromedio(numeros);
document.querySelector('#menor').textContent += obtenerMinimo(numeros);
document.querySelector('#mayor').textContent += obtenerMaximo(numeros);
document.querySelector('#mas-repetido').textContent += obtenerNumeroMasRepetido(numeros);

function obtenerNumeros(numeros) {
  for (let i = 0; i < $listaDeNumeros.length; i++) {
    numeros.push(Number($listaDeNumeros[i].textContent));
  }

  return numeros;
}

function calcularPromedio(numeros) {
  let acumulador = 0;
  for (let i = 0; i < numeros.length; i++) {
    acumulador += numeros[i];
  }
  return acumulador / numeros.length;
}

function obtenerMinimo(numeros) {
  let minimo = 100000000;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < minimo) {
      minimo = numeros[i];
    }
  }

  return minimo;
}

function obtenerMaximo(numeros) {
  let maximo = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > maximo) {
      maximo = numeros[i];
    }
  }

  return maximo;
}

function obtenerNumeroMasRepetido(numeros) {
  let masRepetido;

  for (let i = 0; i < numeros.length; i++) {
    let vecesRepetidas = 0;
    let maximo = 0;

    for (let j = 0; j < numeros.length; j++) {
      if (numeros[i] === numeros[j] && i != j) {
        vecesRepetidas++;
      }
    }

    if (vecesRepetidas > maximo) {
      masRepetido = numeros[i];
    }
  }

  return masRepetido;
}
