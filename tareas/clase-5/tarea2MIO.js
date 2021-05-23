//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

/*document.querySelector("#enviar").onclick = function() {
	const $cantidadClases = Number(
		document.querySelector("#cantidad-clases").value
	);

	for (let i = 0; i < $cantidadClases; i++) {
		const $cuerpoPagina = document.querySelector("body");
		const $inputFormulario1 = document.createElement("input");
		$inputFormulario1.type = "text"; //Este for es para crear los input.
		$cuerpoPagina.appendChild($inputFormulario1);
	}
	return false;
};
*/

document.querySelector("#enviar-clases").onclick = function() {
	const $cantidadClases = Number(
		document.querySelector("#cantidad-clases").value
	);
	const $cuerpoPagina = document.querySelector("body");

	for (let i = 0; i < $cantidadClases; i++) {
		const $parrafoNuevo = document.createElement("p" + i);
		const $lineaNueva = document.createElement("br");
		const $inputFormularioHoras = document.createElement("input");
		const $inputFormularioMinutos = document.createElement("input");
		const $inputFormularioSegundos = document.createElement("input");

		$inputFormularioHoras.type = "number";
		$inputFormularioHoras.placeholder = "Horas";
		$inputFormularioHoras.className = "inputHoras";

		$inputFormularioMinutos.type = "number";
		$inputFormularioMinutos.placeholder = "Minutos";
		$inputFormularioMinutos.className = "inputMinutos";

		$inputFormularioSegundos.type = "number";
		$inputFormularioSegundos.placeholder = "Segundos";
		$inputFormularioSegundos.className = "inputSegundos";

		$parrafoNuevo.appendChild($inputFormularioHoras);
		$parrafoNuevo.appendChild($lineaNueva);
		$parrafoNuevo.appendChild($inputFormularioMinutos);
		$parrafoNuevo.appendChild($lineaNueva);
		$parrafoNuevo.appendChild($inputFormularioSegundos);
		$parrafoNuevo.appendChild($lineaNueva);
		$cuerpoPagina.appendChild($parrafoNuevo);
	}

	return false;
};
const $nuevaLinea = document.createElement("br");
const $botonEnviar = document.createElement("input");
$botonEnviar.type = "submit";
$botonEnviar.className = "segundoBoton";
const $cuerpoPagina = document.querySelector("body");
$cuerpoPagina.appendChild($botonEnviar);
$cuerpoPagina.appendChild($nuevaLinea);
$botonEnviar.onclick = function() {
	let $inputFormularioHoras = document.querySelectorAll(".inputHoras");
	let $inputFormularioMinutos = document.querySelectorAll(".inputMinutos");
	let $inputFormularioSegundos = document.querySelectorAll(".inputSegundos");
	let totalHoras;
	let totalMinutos;
	let totalSegundos;
	let totalHorasArray = [];
	let totalMinutosArray = [];
	let totalSegundosArray = [];
	for (
		let i = 0;
		$inputFormularioHoras.length > i ||
		$inputFormularioMinutos > i ||
		$inputFormularioSegundos > i;
		i++
	) {
		totalHorasArray =
			Number($inputFormularioHoras[i].value) + Number(totalHorasArray);
		totalHoras = totalHorasArray;

		totalMinutosArray =
			Number($inputFormularioMinutos[i].value) + Number(totalMinutosArray);
		totalMinutos = totalMinutosArray;

		totalSegundosArray =
			Number($inputFormularioSegundos[i].value) + Number(totalSegundosArray);
		totalSegundos = totalSegundosArray;
	}
	const $strongNuevo = document.createElement("strong");
	$strongNuevo.className = "strongTiempoTotal";
	$strongNuevo.innerText =
		"El total de las clases es " +
		totalHoras +
		"Horas " +
		totalMinutos +
		"Minutos " +
		totalSegundos +
		"Segundos";
	$cuerpoPagina.appendChild($strongNuevo);
	return false;
};
//console.log(Number($cantidadHorasNodo[0]).value);
//for (let i = 0; $cantidadHorasNodo.length < i; i++) {
//	cantidadHorasArray.push($cantidadHorasNodo[i]);
//	console.log($cantidadHorasNodo[i]);

/*
document.querySelector("#calcular-tiempo-total").onclick = function() {
	const $cuerpoPagina = document.querySelector("body");
	const $horas = Number(document.querySelector("#horas").value);
	const $minutos = Number(document.querySelector("#minutos").value);
	const $segundos = Number(document.querySelector("#segundos").value);
	const $strong = document.createElement("strong");
	const $textoStrong = document.createTextNode(
		pasarHorasASegundos($horas) + pasarMinutosASegundos($minutos) + $segundos
	);
	$strong.appendChild($textoStrong);
	$cuerpoPagina.appendChild($strong);
	return false;
};
*/
/*
	function horasASegundos($horas) {
		let segundosEnHoras = $horas * 60 * 60;
		$cuerpoPagina.appendChild(segundosEnHoras);
	}
	function minutosASegundos($minutos) {
		let segundosEnMinutos = $minutos * 60;
		$cuerpoPagina.appendChild(segundosEnMinutos);
	}
*/
