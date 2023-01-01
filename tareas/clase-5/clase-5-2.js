// TAREA: crear un formulario donde un usuario pueda ingresar su salario anual.
// cuando el usuario haga click en el botón "calcular", mostrar el salario mensual
// en una caja de texto deshabilitada. --> <input type="text" disabled id="salario-mensual"/>

function calcularSalarioMensual(salarioAnual){
    const MESES_ANIO = 12; 
    return Number(salarioAnual) / MESES_ANIO;
}

const $botonCalcular = document.querySelector("#boton-calcular");

$botonCalcular.onclick = function(){
    const salarioAnual = document.querySelector("#salario-anual").value;
    const salarioMensual = calcularSalarioMensual(salarioAnual);
    const $inputResultado = document.querySelector("#salario-mensual");
    $inputResultado.value = `Su salario mensual es $${salarioMensual}.`; 
    return false;
}

const $botonReset = document.querySelector("#boton-reset");

$botonReset.onclick = function(){
    document.querySelector("#salario-anual").value = "";
    $inputResultado.value = "";
    return false;
}
