let $nombreUsuario = document.querySelector('#nombre-usuario').value;
let $segundoNombreUusuario = document.querySelector('#segundo-nombre-usuario').value;
let $apellidoUsuario= document.querySelector("#apellido-usuario").value
let $edadUsuario= Number(document.querySelector("#edad-usuario").value)
let $mostrarDatosUusuario=document.querySelector("#mostrar-resultados")
let $saludoUsuario=document.querySelector("#saludo-usuario")
let $botonFormulario = document.querySelector('#boton-formulario');


$botonFormulario.onclick= function capturarDatosUsuario () {
    $mostrarDatosUusuario.value =
			$nombreUsuario +
			'  ' +
			$segundoNombreUusuario +
			'  ' +
			$apellidoUsuario +
			'  ' +
			$edadUsuario;
    cambiarMensajeBienvenida()
    return false
}
function cambiarMensajeBienvenida(){
    $saludoUsuario.innerText = 'Bienvenido ' + $nombreUsuario;
}
