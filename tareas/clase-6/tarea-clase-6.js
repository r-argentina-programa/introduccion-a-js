/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

console.log('hola');

const $botonInicial = document.querySelector('#boton-inicial');

$botonInicial.onclick = function() {
    const $divFamilia = document.querySelector('div.familia');
    $divFamilia.innerHTML = '';
    const cantidadFamilia = Number(document.querySelector('#cantidad-familia').value);

    for (let i = 0; i < cantidadFamilia; i++) {
        const $nuevoLabel = document.createElement('label');
        $nuevoLabel.innerHTML = `Edad integrante ${i+1}`;

        const $nuevoInput = document.createElement('input');
        $nuevoInput.classList.add('edades');

        $divFamilia.appendChild(document.createElement('br'));

        $divFamilia.appendChild($nuevoLabel);
        $divFamilia.appendChild(document.createElement('br'));
        $divFamilia.appendChild($nuevoInput);
        $divFamilia.appendChild(document.createElement('br'));
        
    }

    
    $divFamilia.appendChild(document.createElement('br'));
    const $divCalculos = document.querySelector('#calculos');
    $divCalculos.style.display = '';

    document.querySelector('#boton-calculos').onclick = function() {

        const $nodeEdades = document.querySelectorAll('.edades');
        const arrayEdades = [];
        for (let i = 0; i < $nodeEdades.length; i++) {
            arrayEdades.push(Number($nodeEdades[i].value))
        }


        const $textoResultado = document.createTextNode(`La edad mas chica es ${numeroMinimo(arrayEdades)}, la edad mas grande es ${numeroMaximo(arrayEdades)} y la edad promedio es ${calcularPromedio(arrayEdades)}`)

        $divFamilia.appendChild($textoResultado);

    }
    return false;
}




function calcularPromedio(array) {
    let contador = 0;
    for (let i = 0; i < array.length; i++) {
        contador += array[i];
    }
    return contador / array.length;
}

function numeroMaximo(array) {
    let numMayor = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > numMayor) {
            numMayor = array[i];
        } 
    }

    return numMayor;
}

function numeroMinimo(array) {
    let numMenor = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < numMenor) {
            numMenor = array[i];
        } 
    }

    return numMenor;
}
/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
