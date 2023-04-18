/*
Tarea 1:
========

- Crear un formulario donde el usuario pueda ingresar su "Salario Anual"
- Cuando el usuario haga click en el botón "Calcular", mostrar el resultad en un input deshabilitado
*/

const $botonCalcular = document.querySelector("#boton-calcular");

$botonCalcular.onclick = function(event) {
    const salarioAnual = Number(document.querySelector("#salario-anual").value);
    const salarioMensual = calcularSalarioMensual(salarioAnual);
    mostrarResultadoInput(salarioMensual);

    event.preventDefault();
}

function calcularSalarioMensual(salarioAnual) {
    const mesesEnUnAnio = 12;

    return salarioAnual / mesesEnUnAnio;
}

function mostrarResultadoInput(resultado) {
    document.querySelector("#salario-mensual").value = resultado;
}
