// boton de siguiente
document.querySelector('#siguiente').onclick = function(event) {
    const $numeroFamiliar = document.querySelector('#numero-familiar');
    const cantidadIntegrantes = Number($numeroFamiliar.value);

    borrarIntegrantesAnteriores();
    crearIntegrantes(cantidadIntegrantes);
    mostrarCalcular();

    event.preventDefault();
};

// crea integrantes
function crearIntegrantes($numeroFamiliar) {
    for (let i = 0; i < $numeroFamiliar; i++) {
        crearIntegrante(i);
    };
};

function crearIntegrante(i) {
    const $div = document.createElement('div');
    $div.className = 'integrante';

    const $label = document.createElement('label');
    $label.textContent = 'Ingrese el salario del familiar nº' + (i + 1);
    const $input = document.createElement('input');
    $input.type = 'number';

    $div.appendChild($label);
    $div.appendChild($input);

    const $integrantes = document.querySelector('#familiares');
    $integrantes.appendChild($div);

};

// boton calcular
document.querySelector('#calcular').onclick = function(event) {
    const salario = salariosTotales();
    mostrarSalario('mayor', salarioMayor(salario));
    mostrarSalario('menor', salarioMenor(salario));
    mostrarSalario('promedio', salarioPromedio(salario));
    mostrarResultados();

    event.preventDefault();
};

// selecciona salarios
function salariosTotales() {
    const $integrantes = document.querySelectorAll('.integrante input');
    const salarioTotal = [];

    for (let i = 0; i < $integrantes.length; i++) {

        if ($integrantes[i].value === "") {
            continue;
        };
        salarioTotal.push(Number($integrantes[i].value));
    };
    return salarioTotal;
};

// oculta o mustra elementos
function ocultarResultados() {
    document.querySelector('#resultado').className = 'oculto';
}

function mostrarResultados() {
    document.querySelector('#resultado').className = '';
};

function mostrarCalcular() {
    document.querySelector('#calcular').className = 'btn-success';
};

function ocultarCalcular() {
    document.querySelector('#calcular').className = 'oculto';
};

function mostrarSalario(tipo, valor) {
    document.querySelector(`#${tipo}-salario`).textContent = valor;
};

// oculta o mustra elementos
function ocultarResultados() {
    document.querySelector('#resultado').className = 'oculto';
}

function mostrarResultados() {
    document.querySelector('#resultado').className = '';
};

function mostrarCalcular() {
    document.querySelector('#calcular').className = 'btn-success';
};

function ocultarCalcular() {
    document.querySelector('#calcular').className = 'oculto';
};

function mostrarSalario(tipo, valor) {
    document.querySelector(`#${tipo}-salario`).textContent = valor;
};

// boton resetear
document.querySelector('#resetear').onclick = function() {
    borrarIntegrantesAnteriores();
    ocultarCalcular();
    ocultarResultados();
};

function borrarIntegrantesAnteriores() {
    const $integrantes = document.querySelectorAll('.integrante');

    for (let i = 0; i < $integrantes.length; i++) {
        $integrantes[i].remove();
    };

};