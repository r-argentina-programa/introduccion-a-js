//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

let nodoLi = document.querySelectorAll(".item");
let textoEm1 = document.querySelector("#em1");
let textoEm2 = document.querySelector("#em2");
let textoEm3 = document.querySelector("#em3");
let textoEm4 = document.querySelector("#em4");
let listaArray = [];

for (let i = 0; nodoLi.length > i; i++) {
	listaArray.push(nodoLi[i].innerText);
}

function calcularPromedio(numeros) {
	let acumulador = 0;
	for (let i = 0; numeros.length > i; i++) {
		acumulador = acumulador + Number(numeros[i]);
	}
	acumulador = acumulador / numeros.length;
	return acumulador;
}

function calcularMayor(numeros) {
	let acumulador = 0;
	for (let i = 0; numeros.length > i; i++) {
		if (numeros[i] > acumulador) {
			acumulador = numeros[i];
		}
	}
	return acumulador;
}

function calcularMenor(numeros) {
	let acumulador = Number;
	for (let i = 0; numeros.length > i; i++) {
		if (numeros[i] < acumulador) {
			acumulador = numeros[i];
		}
	}
	return acumulador;
}

function imprimirEnPantallaPromedio(numeros) {
	let $acumulador = document.createTextNode(calcularPromedio(numeros));
	textoEm1.appendChild($acumulador);
}
function imprimirEnPantallaMayor(numeros) {
	let $acumulador = document.createTextNode(calcularMayor(numeros));
	textoEm2.appendChild($acumulador);
}
function imprimirEnPantallaMenor(numeros) {
	let $acumulador = document.createTextNode(calcularMenor(numeros));
	textoEm3.appendChild($acumulador);
}

imprimirEnPantallaPromedio(listaArray);
imprimirEnPantallaMayor(listaArray);
imprimirEnPantallaMenor(listaArray);
