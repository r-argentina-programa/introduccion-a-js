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

const $botonIngresar = document.querySelector("#ingresar");

$botonIngresar.onclick = function () {
  const primerNombre = document.querySelector("#primer-nombre").value;
  const segundoNombre = document.querySelector('#segundo-nombre').value;
  const apellido = document.querySelector('#apellido').value;
  const edad = Number(document.querySelector('#edad-usuario').value);

  const EDAD_MINIMA = 17;

  document.querySelector('#resultado').textContent = `${primerNombre} ${segundoNombre} ${apellido}, ${edad} años`;

  if(edad > EDAD_MINIMA){
    document.querySelector('h1').textContent = `Bienvenido al bar, ${primerNombre} ${segundoNombre} ${apellido}`;
  }else{
    document.querySelector('h1').textContent = `No puedes ingresar al bar`;
  }
  
};
