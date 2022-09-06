document.querySelector('#calcular-salario-mensual-usuario').onclick = function () {
    const salarioAnualUsuario = Number(document.querySelector('#salario-anual-usuario').value);

    const salarioMensualUsuario = calcularSalarioMensual(salarioAnualUsuario);

    document.querySelector('#salario-mensual-usuario').value = salarioMensualUsuario;

    return false;
};

function calcularSalarioMensual(salarioAnualUsuario) {
    const MESES_EN_EL_ANIO = 12;
    return salarioAnualUsuario / MESES_EN_EL_ANIO;
    
}
