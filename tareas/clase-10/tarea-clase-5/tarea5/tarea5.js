//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

function convertItemsInNumbers($itemsList) {
  const numbers = [];

  $itemsList.forEach((i) => {
    const number = Number(i.textContent);
    numbers.push(number);
  });

  return numbers;
}

function calculateAverage(listNumbers) {
  let counter = 0;
  listNumbers.forEach((num) => {
    counter = counter + num;
  });

  return counter / listNumbers.length;
}

function orderNumbersFromLeastToGreatest(listNumbers) {
  for (let index = 0; index < listNumbers.length; index++) {
    for (let indexAux = 0; indexAux < listNumbers.length; indexAux++) {
      if (listNumbers[indexAux] > listNumbers[indexAux + 1]) {
        const numAux = listNumbers[indexAux + 1];
        listNumbers[indexAux + 1] = listNumbers[indexAux];
        listNumbers[indexAux] = numAux;
      }
    }
  }
  return listNumbers;
}

function getSmallNumber(listNumbers) {
  return listNumbers[0];
}

function getBiggestNumber(listNumbers) {
  return listNumbers[listNumbers.length - 1];
}

function getNumbersRepeated(listNumbers) {
  let numsRepeated = [];
  for (let index = 0; index < listNumbers.length; index++) {
    const number = listNumbers[index];
    const numberSig = listNumbers[index + 1];
    if (number == numberSig) {
      numsRepeated.push(number);
    }
  }
  return numsRepeated;
}

function createAndRenderEm(text) {
  const $em = document.createElement("em");
  const $contEm = document.querySelector(".cont-results");
  $em.textContent = text;
  $contEm.appendChild($em);
}

function main() {
  const $itemsList = document.querySelectorAll("li");
  const numbers = convertItemsInNumbers($itemsList);
  const numbersOrdenated = orderNumbersFromLeastToGreatest(numbers);

  const average = calculateAverage(numbers);
  createAndRenderEm("El promedio es: " + average);

  const smallNumber = getSmallNumber(numbersOrdenated);
  createAndRenderEm("El número más pequeño es: " + smallNumber);

  const biggestNumber = getBiggestNumber(numbersOrdenated);
  createAndRenderEm("El número más grande es: " + biggestNumber);

  const numsRepeated = getNumbersRepeated(numbersOrdenated);
  createAndRenderEm("El número más frecuente es: " + numsRepeated);
}
main();
