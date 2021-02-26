console.log('Hola');

const $calcularTiempo = document.querySelector('#calcular-tiempo');

$calcularTiempo.onclick = function(){
	const horas = document.querySelector('#horas').value;
	const minutos = document.querySelector('#minutos').value;
	const segundos = document.querySelector('#segundos').value;

	const tiempo = document.querySelector('strong');
	tiempo.textContent = `${horas} hora/s, ${minutos} minuto/s y ${segundos} segundo/s`;

	return false;
}