// boton siguiente
document.querySelector('#siguiente-paso').onclick = function(event) {
    const $cantidadIntegrantes = document.querySelector('#cantidad-integrantes');
    const cantidadIntegrantes = Number($cantidadIntegrantes.value);

    borrarIntegrantesAnteriores();
    crearIntegrantes(cantidadIntegrantes);

    event.preventDefault();
};

// boton calcular
document.querySelector('#calcular').onclick = function(event) {
    const numeros = obtenerEdadesIntegrantes();
    if (obtenerEdadesIntegrantes(numeros).length !== 0) {
        mostrarEdad('mayor', parseInt(obtenerMayorNumero(numeros)));
        mostrarEdad('menor', parseInt(obtenerMenorNumero(numeros)));
        mostrarEdad('promedio', parseInt(obtenerPromedio(numeros)));
        mostrarResultados();

    };


    event.preventDefault();
};

// boton resetear
document.querySelector('#resetear').onclick = resetear;

function borrarIntegrantesAnteriores() {
    const $integrantes = document.querySelectorAll('.integrante');
    for (let i = 0; i < $integrantes.length; i++) {
        $integrantes[i].remove();
    };
};

//crear integrantes
function crearIntegrantes(cantidadIntegrantes) {

    if (cantidadIntegrantes > 0) {
        mostrarBotonCalculo();
    } else {
        resetear();
    }

    for (let i = 0; i < cantidadIntegrantes; i++) {
        crearIntegrante(i);
    };
};

function crearIntegrante(indice) {
    const $div = document.createElement('div');
    $div.className = 'integrante';

    const $label = document.createElement('label');
    $label.textContent = 'Ingresa edad del integrante' + (indice + 1);
    const $input = document.createElement('input');
    $input.type = 'number';

    $div.appendChild($label);
    $div.appendChild($input);

    const $integrantes = document.querySelector('#integrantes');
    $integrantes.appendChild($div);
};

// resetear
function resetear() {
    borrarIntegrantesAnteriores();
    ocultarBotonCalculo();
    ocultarResultados();
};

// funciones de mostrar u ocultar elementos
function ocultarBotonCalculo() {
    document.querySelector('#calcular').className = 'oculto';
};

function mostrarBotonCalculo() {
    document.querySelector('#calcular').className = '';
};

function ocultarResultados() {
    document.querySelector('#analisis').className = 'oculto';
};

function mostrarResultados() {
    document.querySelector('#analisis').className = '';
};

function mostrarEdad(tipo, valor) {
    document.querySelector(`#${tipo}-edad`).textContent = valor;
};


// funcion de obtener integrantes
function obtenerEdadesIntegrantes() {
    const $integrantes = document.querySelectorAll('.integrante [type=number]');
    const edades = [];
    for (let i = 0; i < $integrantes.length; i++) {
        if (Number($integrantes[i].value) !== 0) {
            edades.push(Number($integrantes[i].value));
        };
    };
    return edades;
};