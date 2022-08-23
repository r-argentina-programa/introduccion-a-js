document.querySelector('#calcular-salario-mensual-usuario').onclick = function () {
    const $salarioAnual = Number(document.querySelector('#salario-anual-usuario').value);
    const salarioMensual = calcularSalarioMensual($salarioAnual);

    document.querySelector('#salario-mensual-usuario').value = salarioMensual;

    return false;
};

function calcularSalarioMensual(salarioAnual) {
    const MESES_EN_EL_ANIO = 12;
    return salarioAnual / MESES_EN_EL_ANIO;
}
