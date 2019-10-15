// TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

const $listaDeLis = document.querySelectorAll('li');

let promedioElem = document.querySelector('#promedio');
const numMenorElem = document.querySelector('#numero-menor');
const numMayorElem = document.querySelector('#numero-mayor');
const numMasFrecuenteElem = document.querySelector('#numero-mas-frecuente');

let listaDeNum = [];
let sumaTotal = 0;

for (let i = 0; i < $listaDeLis.length; i++) {
  let valorDeLi = Number($listaDeLis[i].textContent);
  listaDeNum.push(valorDeLi);
}

let menorNum = listaDeNum[1];
let mayorNum = 0;
//Promedio
for (let i = 0; i < listaDeNum.length; i++) {
  sumaTotal += listaDeNum[i];
  //Numero Menor
  if (menorNum > listaDeNum[i]) {
    menorNum = listaDeNum[i];
  }
  //Numero Mayor
  if (mayorNum < listaDeNum[i]) {
    mayorNum = listaDeNum[i];
  }
}
promedioElem.textContent = sumaTotal / listaDeNum.length;
numMenorElem.textContent = menorNum;
numMayorElem.textContent = mayorNum;

//Mas frecuente
let maxFrecuencia = 1;
let contador = 0;
let numMasFrecuente;

for (let i = 0; i < listaDeNum.length; i++) {
  for (let j = 0; j < listaDeNum.length; j++) {  
    if (listaDeNum[i] === listaDeNum[j]) { 
      contador += 1; 
      if (contador > maxFrecuencia) { 
        maxFrecuencia = contador; 
        numMasFrecuente = listaDeNum[i];  
      }
    }
  }
  contador = 0;
}
numMasFrecuenteElem.textContent = numMasFrecuente;
