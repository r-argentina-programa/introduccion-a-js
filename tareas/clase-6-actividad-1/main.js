
document.querySelector('#siguiente-paso').onclick = function (event) {

    const $cantidadIntegrantes = document.querySelector('#cantidad-integrantes').value;
    const cantidadIntegrantes = Number($cantidadIntegrantes);

    borrarIntegrantesAnteriores();
    borrarErroresAnteriores();

    const errorCantidadIntegrantes = validarCantidadIntegrantes(cantidadIntegrantes);

    const errores = {

        ['cantidad-integrantes'] : errorCantidadIntegrantes
    }

    const esExito = manejarErrores(errores) === 0;

    if (esExito) {
        crearIntegrantes(cantidadIntegrantes);
        mostrarBotonCalcular();
    }

    event.preventDefault();
}

document.querySelector('#calcular').onclick = function (event) {
    const numeros = obtenerEdadesIntegrantes();

    const errorEdadesIntegrantes = validarEdadesIntegrantes(numeros)


    const esExito = manejarErrores(errores) === 0

    if(esExito){
        mostrarEdad('mayor', obtenerNumeroMayor(numeros));
        mostrarEdad('menor', obtenerNumeroMenor(numeros));
        mostrarEdad('promedio', obtenerPromedio(numeros));
        mostrarResultados();
        mostrarBotonResetear();

    }else{
        alert('no fue exito')
    }

    

    event.preventDefault();
}

function mostrarEdad(tipo, valor) {
    document.querySelector(`#${tipo}-edad`).textContent = valor;
}

function obtenerEdadesIntegrantes() {
    const $integrantes = document.querySelectorAll('.integrante input');
    const edades = [];
    for (let i = 0; i < $integrantes.length; i++) {
        edades.push(Number($integrantes[i].value));
    }
    return edades;
}

function crearIntegrante(indice) {

    const $div = document.createElement('div');
    $div.className = 'integrante';

    const $label = document.createElement('label');
    $label.textContent = 'Ingrese la edad del integrante #' + (indice + 1);

    const $input = document.createElement('input');
    $input.type = 'number';
    $input.name = `edad-integrante${indice + 1}`

    $div.appendChild($label);
    $div.appendChild($input);


    const $integrantes = document.querySelector('#integrantes');
    $integrantes.appendChild($div);

}


function crearIntegrantes(cantidadIntegrantes) {
    for (let i = 0; i < cantidadIntegrantes; i++) {
        crearIntegrante(i)
    }
}

function ocultarBotonSiguientePaso() {
    document.querySelector('#siguiente-paso').className = 'oculto';
}

function mostrarBotonSiguientePaso() {
    document.querySelector('#siguiente-paso').className = '';
}

function mostrarBotonCalcular() {
    document.querySelector('#calcular').className = '';

}

function mostrarResultados() {
    document.querySelector('#analisis').className = '';
}

function ocultarResultados() {
    document.querySelector('#analisis').className = 'oculto'
}

function mostrarBotonResetear() {
    document.querySelector('#resetear').className = '';
}

function ocultarBotonResetear() {
    document.querySelector('#resetear').className = 'oculto';
}
function borrarErroresAnteriores() {
    const $errores = document.querySelectorAll('#errores li')
