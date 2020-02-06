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
*
* */

let $botonMostrar = document.querySelector('#mostrar');

$botonMostrar.onclick = function(){

  let $primerNombre = document.querySelector('#primer-nombre').value
  let $segundoNombre = document.querySelector('#segundo-nombre').value
  let $apellido = document.querySelector('#apellido').value
  let $edad = document.querySelector('#edad').value

  document.querySelector('h1').textContent = `Bienvenido ${$primerNombre} ${$segundoNombre} ${$apellido}`

  let nodoPagina = document.querySelector('body')

  let nuevoParrafo1 = document.createElement('p')
  let nuevoParrafo2 = document.createElement('p')
  let nuevoParrafo3 = document.createElement('p')
  let nuevoParrafo4 = document.createElement('p')

  let primerNombre = document.createTextNode(`Tu primer nombre es ${$primerNombre}`)
  let segundoNombre = document.createTextNode(`Tu segundo nombre es ${$segundoNombre}`)
  let apellido = document.createTextNode(`Tu apellido es ${$apellido}`)
  let edad = document.createTextNode(`Tu edad es ${$edad}`)

  nuevoParrafo1.appendChild(primerNombre)
  nuevoParrafo2.appendChild(segundoNombre)
  nuevoParrafo3.appendChild(apellido)
  nuevoParrafo4.appendChild(edad)

  nodoPagina.appendChild(nuevoParrafo1)
  nodoPagina.appendChild(nuevoParrafo2)
  nodoPagina.appendChild(nuevoParrafo3)
  nodoPagina.appendChild(nuevoParrafo4)
  
  
}
