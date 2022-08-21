document.querySelector("#calcular-salario-anual-usuario").onclick = function(){
    const salarioMensual = Number(document.querySelector("#salario-mensual-usuario").value);
    console.log(salarioMensual);
    const salarioAnual = calcularSalarioAnual(salarioMensual);

    document.querySelector("#salario-anual-usuario").value = salarioAnual;
    console.log(salarioAnual);

    return false;
}

function calcularSalarioAnual(salarioMensual){
    const MESES_EN_EL_ANIO = 12;
    return salarioMensual * MESES_EN_EL_ANIO;
}
