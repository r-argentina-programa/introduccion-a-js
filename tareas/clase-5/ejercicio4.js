const $numerosHtml = document.querySelectorAll('li');

const arrayDeNumeros = convertirListaAArray();

const resultadoMasGrande = obtenerNumeroMasGrande(arrayDeNumeros);
const resultadoMasChico = obtenerNumeroMasChico(arrayDeNumeros);
const resultadoPromedio = obtenerNumeroPromedio(arrayDeNumeros);
const resultadoFrecuente = obtenerNumeroFrecuente(arrayDeNumeros);

const $numeroPromedio = document.querySelector('#numero-promedio');
const $numeroMasChico = document.querySelector('#numero-chico');
const $numeroMasGrande = document.querySelector('#numero-grande');
const $numeroFrecuente = document.querySelector('#numero-frecuente');

$numeroPromedio.innerText = resultadoPromedio;
$numeroMasChico.innerText = resultadoMasChico;
$numeroMasGrande.innerText = resultadoMasGrande;
$numeroFrecuente.innerText = resultadoFrecuente;


function convertirListaAArray() {
	const array = [];
	for (let i = 0; i < $numerosHtml.length; i++) {
		array.push(Number($numerosHtml[i].innerText));
	}
	return array;
}
convertirListaAArray();

function obtenerNumeroMasGrande(array) {
	let numeroGrande = arrayDeNumeros[0];
	for (let i = 0; i < array.length; i++) {
		if (array[i] > numeroGrande) {
			numeroGrande = array[i];
		}
	}
	return numeroGrande;
}

function obtenerNumeroMasChico(array) {
	let numeroChico = arrayDeNumeros[0];
	for (let i = 0; i < array.length; i++) {
		if (array[i] < numeroChico) {
			numeroChico = array[i];
		}
	}

	return numeroChico;
}

function obtenerNumeroPromedio(array) {
	let numeroPromedio = 0;
	let contenedorDeSuma = 0;
	for (let i = 0; i < array.length; i++) {
		contenedorDeSuma += array[i];
	}
	numeroPromedio = contenedorDeSuma / array.length;
	return numeroPromedio;
}

function obtenerNumeroFrecuente(array) {
	let numeroFrecuente = 0;
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			if (array[i] === array[j]) {
				numeroFrecuente = array[j];
			}
		}
	}
    return numeroFrecuente
}
