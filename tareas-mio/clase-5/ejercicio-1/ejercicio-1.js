//TAREA: crear un formulario donde un usuario pueda ingresar su salario anual.
//cuando el usuario haga click en el botón "calcular", mostrar el salario mensual
// en una caja de texto deshabilitada. --> <input type="text" disabled id="salario-mensual"/>

const $botonCalcular = document.querySelector('#calcular');

$botonCalcular.onclick = function () {
  const salarioAnual = document.querySelector('#salario-anual').value;
  const MESES_EN_EL_ANIO = 12;

  const salarioMensual = salarioAnual / MESES_EN_EL_ANIO;

  document.querySelector('#salario-mensual').value = salarioMensual;

  return false;
};
