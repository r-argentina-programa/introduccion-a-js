//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!
/*Ejemplo form:
  <form id="entrada-bar" onsubmit="return false;">
    <input type="text" placeholder="Ingresá tu nombre" id="nombre-usuario"/>
    <input type="number" placeholder="Ingresá tu edad" id="edad-usuario" />
    <input type="submit" value="Ingresar" id="ingresar"/>
  </form>

  <div id="resultado">Hola</div>
*/

function main() {
  const $title = document.querySelector(".title");
  const $button = document.querySelector("#ingresar");

  $button.addEventListener("click", () => {
    const $name = document.querySelector("#nombre-usuario");
    const $age = document.querySelector("#edad-usuario");

    if ($age.value == "" && $name.value == "") {
      $title.textContent = `Bienvenido`;
    } else if ($age.value == "") {
      $title.textContent = `Bienvenido, ${$name.value}.`;
    } else {
      $title.textContent = `Bienvenido, ${$name.value}. Tenés ${$age.value}`;
    }
  });
}
main();
