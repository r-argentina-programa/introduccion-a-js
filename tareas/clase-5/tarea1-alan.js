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

//TAREA1: crear un formulario donde un usuario pueda ingresar su salario anual.

//cuando el usuario haga click en el botón "calcular", mostrar el salario mensual

// en una caja de texto deshabilitada. --> <input type="text" disabled id="salario-mensual"/>


function calcularSalarioMensual(salarioAnual){
  return salarioAnual / 12;
}

function calcularSalarioAnual(salarioMensual){
  return salarioMensual * 12;
}


const $calcularSalarioMensual = document.querySelector("#calcular-salario-mensual");

$calcularSalarioMensual.onclick = function(){
  const salarioAnual = Number(document.querySelector('#ingresar-salario-anual').value);
  const salarioMensual = calcularSalarioMensual(salarioAnual);
  document.querySelector('#salario-mensual').value = salarioMensual;
  
  return false; 
}

const $calcularSalarioAnual = document.querySelector('#calcular-salario-anual');

$calcularSalarioAnual.onclick = function(){
  const $salarioMensual = Number(document.querySelector('#ingresar-salario-mensual').value);
    const salarioAnual = calcularSalarioAnual($salarioMensual);
      document.querySelector('#salario-anual').value = salarioAnual;

        return false;
}
