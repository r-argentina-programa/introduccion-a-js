//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

let nodoLi = document.querySelectorAll(".lista");
let textoEm1 = document.querySelector(".em1");
let textoEm2 = document.querySelector(".em2");
let textoEm3 = document.querySelector(".em3");
let textoEm4 = document.querySelector(".em4");
let listaArray = [];

for (let i = 0; nodoLi.length > i; i++) {
	listaArray = listaArray + nodoLi[i].innerText;
}

function calcularPromedio() {
	let acumulador = 0;
	for (let i = 0; listaArray.length > i; i++) {
		acumulador = acumulador + Number(listaArray[i]);
	}
	acumulador = acumulador / listaArray.length;
	let $acumulador = document.createTextNode(acumulador);
	textoEm1.appendChild($acumulador);
}
calcularPromedio();

function calcularMayor() {
	let acumulador = 0;
	for (let i = 0; listaArray.length > i; i++) {
		if (listaArray[i] > acumulador) {
			acumulador = listaArray[i];
		}
	}
	let $acumulador = document.createTextNode(acumulador);
	textoEm2.appendChild($acumulador);
}
calcularMayor();

function calcularMenor() {
	let acumulador = Number;
	for (let i = 0; listaArray.length > i; i++) {
		if (listaArray[i] < acumulador) {
			acumulador = listaArray[i];
		}
	}
	let $acumulador = document.createTextNode(acumulador);
	textoEm3.appendChild($acumulador);
}
calcularMenor();
