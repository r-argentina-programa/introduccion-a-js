/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.

Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

document.querySelector('#crear-integrante').onclick = function () {
    crearIntegrante();
    mostrarBotonCalcular();
    ocultarResultados();
}


document.querySelector('#eliminar-integrante').onclick = function () {
    eliminarIntegrante();
}

function eliminarIntegrante() {

    const $integrantes = document.querySelectorAll('.intgrante')
    $integrantes.pop(

    )

}


function crearIntegrante() {

    const $div = document.createElement('div');
    $div.className = 'integrante';

    const $label = document.createElement('label');
    $label.textContent = `Ingrese el salario del integrante`;

    const $input = document.createElement('input');
    $input.type = 'number';


    $div.appendChild($label);
    $div.appendChild($input);

    const $integrantes = document.querySelector('#integrantes')
    $integrantes.appendChild($div);
}

document.querySelector('#calcular').onclick = function () {
    const numeros = obtenerSalariosIntegrantes();

    mostrarSalarios('mayor', obtenerNumeroMayor(numeros));
    mostrarSalarios('menor', obtenerNumeroMenor(numeros));
    mostrarSalarios('promedio', obtenerPromedio(numeros));
    mostrarResultados();

}

function mostrarSalarios(tipo, valor) {
    document.querySelector(`#${tipo}-salario`).textContent = valor;
}



function obtenerSalariosIntegrantes() {
    const $salariosIntegrantes = document.querySelectorAll('.integrante input');
    let salarios = [];
    for (let i = 0; i < $salariosIntegrantes.length; i++) {

        if ($salariosIntegrantes[i].value == '') {
            continue;
        } else {
            salarios.push(Number($salariosIntegrantes[i].value));
        }
    }
    return salarios;
}


function mostrarBotonCalcular() {
    document.querySelector('#calcular').className = '';
}

function ocultarBotonCalcular() {
    document.querySelector('#calcular').className = 'oculto';
}

function mostrarResultados() {
    document.querySelector('#analisis').className = '';
}

function ocultarResultados() {
    document.querySelector('#analisis').className = 'oculto';
}







