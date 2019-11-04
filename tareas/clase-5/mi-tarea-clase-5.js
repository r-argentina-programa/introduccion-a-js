console.log('hola');
console.log(document.querySelector('h1').textContent);


const $entrar = document.querySelector('#entrar');

$entrar.onclick = function(){
	const primerNombre = document.querySelector('#primer-nombre').value;
	const segundoNombre = document.querySelector('#segundo-nombre').value;
	const apellido = document.querySelector('#apellido').value;
	const edad = Number(document.querySelector('#edad').value);


	document.querySelector('#datos-finales').value = `Tu nombre es ${primerNombre}, tu segundo nombre es ${segundoNombre},
	tu apellido es ${apellido} y tu edad es ${edad}`;

	return false;
}
