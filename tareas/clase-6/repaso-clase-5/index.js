function calcularSalarioMensual(salarioAnual) {
    return salarioAnual / 12;
}

function validarSalarioAnualUsuario(salarioAnual) {
    if (salarioAnual === 0) {
        return 'El campo Salario Anual no puede estar vacio';
    }
    if (!/^[0-9]+$/.test(salarioAnual)) {
        return 'El campo Salario Anual solo acepta numeros';
    }
    return '';
}

function validarFuncionCalcularSalarioMensual(salarioAnual) {
    if (salarioAnual === 0) {
        return 'No se puede obtener el resultado, si no ingresa un valor en el campo salario Anual';
    }
    return '';
}

const $calcularSalarioMensual = document.querySelector('#calcular-salario-mensual');

$calcularSalarioMensual.onclick = function (event) {
    event.preventDefault();
    const salarioAnual = document.querySelector('#salarioAnualUsuario').value;
    const salarioMensual = calcularSalarioMensual(salarioAnual);
    document.querySelector('#salario-mensual').value = salarioMensual;
};

function validarFormulario(event) {
    const salarioAnualUsuario = $form.salarioAnualUsuario.value;

    const errorSalarioAnualUsuario = validarSalarioAnualUsuario(salarioAnualUsuario);

    const errores = {
        salarioAnualUsuario: errorSalarioAnualUsuario,
    };
}

function manejarErrores(errores) {
    const keys = Object.keys(errores);
    const $errores = document.querySelector('#errores');

    let cantidadErrores = 0;

    keys.forEach(function (key) {
        const error = errores[key];

        if (error) {
            cantidadErrores++;
            $form[key].className = 'error';

            const $error = document.createElement('li');
            $error.innerHTML = error;
            $errores.appendChild($error);
        }
    });
    return cantidadErrores;
}
