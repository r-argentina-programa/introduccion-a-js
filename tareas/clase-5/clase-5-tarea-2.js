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

  <div id="resultado">Hola</div>
*/



const $botonIngresarFormulario = document.querySelector('#ingresar');
$botonIngresarFormulario.onclick = function() {
  let $nombreUsuario = document.querySelector('#nombre-usuario');
  let $segundoNombreUsuario = document.querySelector('#nombre-usuario-2');
  let $apellidoUsuario = document.querySelector('#apellido-usuario');
  let $edadUsuario = document.querySelector('#edad-usuario');
  let $saludoTitulo = document.querySelector('h1');
  $saludoTitulo.innerText = `Bienvenido ${$nombreUsuario.value}!`; 


  const $nodoPagina = document.querySelector('#resultado');

  const $parrafoNombreUsuario = document.createElement('p');
  const $textoNombreUsuario = document.createTextNode($nombreUsuario.value);
  
  $parrafoNombreUsuario.appendChild($textoNombreUsuario);
  $nodoPagina.appendChild($parrafoNombreUsuario);

  const $parrafoSegundoNombre = document.createElement('p');
  const $textoSegundoNombre = document.createTextNode($segundoNombreUsuario.value);

  $parrafoSegundoNombre.appendChild($textoSegundoNombre);
  $nodoPagina.appendChild($parrafoSegundoNombre);
  
  const $parrafoApellido = document.createElement('p');
  const $textoApellido = document.createTextNode($apellidoUsuario.value);
  $parrafoApellido.appendChild($textoApellido);
  $nodoPagina.appendChild($parrafoApellido);

  const $parrafoEdadUsuario = document.createElement('p');
  const $textoEdadUsuario = document.createTextNode($edadUsuario.value);
  $parrafoEdadUsuario.appendChild($textoEdadUsuario);
  $nodoPagina.appendChild($parrafoEdadUsuario);
}

function limpiarInputs() {
  const $limpiarInputs = document.querySelectorAll(`p`);
  const $nodoPadre = document.querySelector('#resultado');
  for (let i = 0; i < $limpiarInputs.length; i++) {
    $nodoPadre.removeChild($limpiarInputs[i]);
  }
}

const $botonLimpiarInputs = document.querySelector('#limpiar');
$botonLimpiarInputs.onclick = function() {
  limpiarInputs();
}