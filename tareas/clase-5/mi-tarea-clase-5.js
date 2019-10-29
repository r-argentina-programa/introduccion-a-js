console.log('hola');
console.log(document.querySelector('h1').textContent);


const $datosFinales = document.querySelector('#entrar');

$datosFinales.onclick = function(){
	const primerNombre = document.querySelector('#primer-nombre').textContent;
	const segundoNombre = document.querySelector('#segundo-nombre').textContent;
	const apellido = document.querySelector('#apellido').textContent;
	const edad = Number(document.querySelector('#edad').value);


	document.querySelector('#datos-finales').value = $datosFinales;

	return false;
}
