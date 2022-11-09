function calcularSalarioMensual(salarioAnual) {
    return salarioAnual / 12;
}

const $calcularSalarioMensual = document.querySelector('#calcular-salario-mensual');

$calcularSalarioMensual.onclick = function (event) {
    const salarioAnual = document.querySelector('#salarioAnualUsuario').value;
    console.log('me hiciste click');
    const salarioMensual = calcularSalarioMensual(salarioAnual);
    document.querySelector('#salario-mensual').value = salarioMensual;
    event.preventDefault();
};

function validarSalarioAnualUsuario(salarioAnual) {
    if (salarioAnual.length === 0) {
        return 'El campo Salario Anual no puede estar vacio';
    }
    if (!/^[0-9]+$/.test(salarioAnual)) {
        return 'El campo Salario Anual solo acepta numeros';
    }
    return '';
}

/* function validarFuncionCalcularSalarioMensual(a, b) {
    return a / b;
}
 */
