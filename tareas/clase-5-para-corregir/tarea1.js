// TAREA 1
// completar tareas/clase-5/index.html para que incluya tarea-clase-5.js
// crear un formulario donde un usuario pueda ingresar su salario anual.
//cuando el usuario haga click en el botón "calcular", mostrar el salario mensual
// en una caja de texto deshabilitada. --> <input type="text" disabled id="salario-mensual"/>

function calculateMonthlySalary(annualSalary) {
  return annualSalary / 12;
}

const $calculateMonthlySalary = document.querySelector(
  "#calculate-monthly-salary"
);

$calculateMonthlySalary.onclick = () => {
  console.log("me hicieron click");
  const annualSalary = document.querySelector("#annual-salary");
  const monthlySalary = document.querySelector("#monthly-salary");
  monthlySalary.value = calculateMonthlySalary(annualSalary.value);
  return false;
};
