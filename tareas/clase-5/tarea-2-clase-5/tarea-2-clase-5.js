
document.querySelector('#devolver-nombre-completo').onclick = function(){
  const primerNombreDeUsuario = document.querySelector('#primer-nombre-usuario').value;
  const segundoNombreDeUsuario = document.querySelector('#segundo-nombre-usuario').value;
  const apellidoDeUsuario = document.querySelector('#apellidos-usuario').value;
  const edadDeUsuario = Number(document.querySelector('#edad-usuario').value);
  

  document.querySelector('#devolver-nombre-completo').value = nombreCompleto;
  return false;
}




/* document.querySelector('#calcular-salario-mensual').onclick = function(){
  const salarioAnual = Number(document.querySelector('#salario-anual').value);
  const salarioMensual = calcularSalarioMensual(salarioAnual);

  document.querySelector('#salario-mensual').value = salarioMensual;

  return false;
}

function calcularSalarioMensual(salarioAnual){
  return salarioAnual / 12;
} */



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