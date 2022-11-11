function calcularSalarioMensual(salarioAnual) {
    return salarioAnual / 12;
}

function validarSalarioAnualUsuario(salarioAnual) {
    if (salarioAnual.length === 0) {
        return 'El campo Salario Anual no puede estar vacio';
    }
    if (!/^[0-9]+$/.test(salarioAnual)) {
        return 'El campo Salario Anual solo acepta numeros';
    }
    return '';
}

const $calcularSalarioMensual = document.querySelector('#calcular-salario-mensual');
$calcularSalarioMensual.onclick = function (event) {
    event.preventDefault();
    borrarIntegrantesAnteriores();
    const salarioAnual = document.querySelector('#salario-anual-usuario').value;
    const salarioMensual = calcularSalarioMensual(salarioAnual);
    document.querySelector('#salario-mensual').value = salarioMensual;
};

document.querySelector('#reset').onclick = function (event) {
    $form.reset();
    borrarIntegrantesAnteriores();
};

function validarFormulario(event) {
    event.preventDefault();
    const $form = document.querySelector('#calculadora-salario-mensual');

    const salarioAnualUsuario = $form['salario-anual-usuario'].value;

    const errorSalarioAnualUsuario = validarSalarioAnualUsuario(salarioAnualUsuario);

    const errores = {
        salarioAnualUsuario: errorSalarioAnualUsuario,
    };

    const esExito = manejarErrores(errores) === 0;
    if (esExito) {
        $form.className = 'oculto';
        document.querySelector('#exito').className = '';
    }
}

function borrarIntegrantesAnteriores() {
    const $erroresLi = document.querySelectorAll('li');
    for (let i = 0; i < $erroresLi.length; i++) {
        $erroresLi[i].remove();
    }
}

function manejarErrores(errores) {
    const keys = Object.keys(errores);
    const $errores = document.querySelector('#errores');

    keys.forEach(function (key) {
        const error = errores[key];

        if (error) {
            $form[key].className = 'error';

            const $error = document.createElement('li');
            $error.innerText = error;
            $errores.appendChild($error);
        } else {
            $form[key].className = 'exito';
        }
    });
}

const $form = document.querySelector('#calculadora-salario-mensual');
$form.onclick = validarFormulario;
