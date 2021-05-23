//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

/*
Ejemplo form:
  <form id="entrada-bar" onsubmit="return false;">
    <input type="text" placeholder="Ingresá tu nombre" id="nombre-usuario"/>
    <input type="number" placeholder="Ingresá tu edad" id="edad-usuario" />
    <input type="submit" value="Ingresar" id="ingresar"/>
  </form>

  <div id="resultado">Hola</div> cambio para poder mergear un branch. creo
*/

document.querySelector("#ingresar").onclick = function() {
	const $nombreUsuario = document.querySelector("#nombre-usuario").value;
	const $segundoNombreUsuario = document.querySelector(
		"#segundo-nombre-usuario"
	).value;
	const $apellidoUsuario = document.querySelector("#apellido-usuario").value;
	const $edadUsuario = Number(document.querySelector("#edad-usuario").value);
	const nodoPagina = document.querySelector("body");
	const nuevoParrafo = document.createElement("p");
	const textoParrafo = document.createTextNode(
		"Tenes " +
			$edadUsuario +
			" años, " +
			$nombreUsuario +
			" " +
			$apellidoUsuario
	);
	nuevoParrafo.appendChild(textoParrafo);
	nodoPagina.appendChild(nuevoParrafo);
	document.querySelector("h1").textContent = "Bienvenido " + $nombreUsuario;

	return false;
};
