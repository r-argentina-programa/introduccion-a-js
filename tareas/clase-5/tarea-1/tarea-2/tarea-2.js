document.querySelector('#mostrar-informacion-usuario').onclick = function () {
	const primerNombreUsuario = document.querySelector('#primer-nombre-usuario').value;
	const segundoNombreUsuario = document.querySelector('#segundo-nombre-usuario').value;
	const apellidosUsuario = document.querySelector('#apellidos-usuario').value;
	const edadUsuario = Number(document.querySelector('#edad-usuario').value);

	const informacionUsuario = capturarInformacion(
		primerNombreUsuario,
		segundoNombreUsuario,
		apellidosUsuario,
		edadUsuario,
	);

	const MENSAJE_BIENVENIDA = 'Bienvenid@!';
	document.querySelector('#bienvenido').innerText = `${MENSAJE_BIENVENIDA} ${informacionUsuario}`;
	return false;
};

function capturarInformacion(primerNombreUsuario, segundoNombreUsuario, apellidosUsuario, edadUsuario) {
	const informacionUsuario = `${primerNombreUsuario}  ${segundoNombreUsuario} ${apellidosUsuario} de ${edadUsuario} años`;

	return informacionUsuario;
}
const MENSAJE_BIENVENIDA = 'Bienvenid@!';
document.querySelector('#borrar').onclick = function () {
	document.querySelector('#bienvenido').innerHTML = MENSAJE_BIENVENIDA;
};
