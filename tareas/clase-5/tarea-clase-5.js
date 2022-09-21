/*
Cosas a tener en cuenta:
1. Los <input> no tienen .innerText, en vez de eso, usan .value. https://developer.mozilla.org/es/docs/Web/HTML/Elemento/input

2. Los demás elementos usan .innerText para acceder y modificar al texto que aparece dentro. https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
También pueden usar .textContent, las diferencias no son importantes por ahora.

3. Para evitar que el formulario <form> se “mande” y por ende recargue la página,
al event handler “onclick”, agréguentle un return false; al final de la función.

Ejemplo:
const $botonCalcular = document.querySelector("#boton-calcular");

$botonCalcular.onclick = function()
    // código que se ejecuta cuando le hagan click a este elemento...
    return false;
}
*/

//TAREA: completar tareas/clase-5/index.html para que incluya tarea-clase-5.js
//TAREA: crear un formulario donde un usuario pueda ingresar su salario anual.
//cuando el usuario haga click en el botón "calcular", mostrar el salario mensual
// en una caja de texto deshabilitada. --> <input type="text" disabled id="salario-mensual"/>
function calcularSalarioMensual(salarioAnualUsuario) {
  const MESES_EN_UN_ANIO = 12;
  return (salarioAnualUsuario / MESES_EN_UN_ANIO).toFixed(2);
}

function calcularSalarioAnual(salarioMensualUsuario) {
 const MESES_EN_UN_ANIO = 12;
 return (salarioMensualUsuario * MESES_EN_UN_ANIO).toFixed(2);
}

const $botonCalcularSalarioMensual = document.querySelector(`#ingresar`);

$botonCalcularSalarioMensual.onclick = function() {
  const $salarioAnualUsuario = Number(document.querySelector
  (`#salario-anual-usuario`).value);
  let $resultadoSalarioMensual = document.querySelector(`#salario-mensual`);
  $resultadoSalarioMensual.value = calcularSalarioMensual($salarioAnualUsuario);
}
const $botonCalcularSalarioAnual = document.querySelector(`#ingresar-salario-mensual`);

$botonCalcularSalarioAnual.onclick = function() {
  const $salarioMensualUsuario = Number(document.querySelector(`#salario-mensual-usuario`).value);
  let $resultadoSalarioAnual = document.querySelector(`#salario-anual`);
  $resultadoSalarioAnual.value = calcularSalarioAnual($salarioMensualUsuario);
}

