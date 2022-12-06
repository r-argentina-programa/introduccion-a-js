// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

function checkearNombreDeUsuario(nombreUsuario) {
	const miNombre = 'Yamil';
	const otroNombre = 'Jorge';
	if (nombreUsuario === miNombre) {
		alert('Hola, Tocayo! Yo también me llamo' + miNombre);
	} else if (nombreUsuario === otroNombre) {
		alert('Hola ' + otroNombre + ' te llamás igual que mi primo');
	} else {
		alert('hola ' + nombreUsuario);
	}
}

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.
function checkearEdadUsuario(edadUsario) {
	const miEdad = 29;
	if (edadUsario === miEdad) {
		alert('tenemos la misma edad');
	}
}
//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.
function entrarAlBarChecker(respuestaUsuario) {
	const edadMinima = 18;
	if (respuestaUsuario.toLowerCase() === 'si') {
		let edadUsuario = prompt('cuantos años tenes?');
		if (edadUsuario >= edadMinima) {
			alert('podes pasar');
		} else {
			alert('no podes pasar');
		}
	} else if (respuestaUsuario.toLowerCase() === 'no') {
		alert('no podes pasar');
	} else {
		alert('ingresa una respuesta valida');
		entrarAlBarChecker();
	}
}

function checkearInformacionUsuario(){
checkearNombreDeUsuario("mauri");
checkearEdadUsuario(18);
entrarAlBarChecker("SI");
}
checkearInformacionUsuario()