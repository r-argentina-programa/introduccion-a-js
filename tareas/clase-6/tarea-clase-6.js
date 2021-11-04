/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/
document.querySelector("#siguiente-paso").onclick = function() {
    const $cantidadIntegrantes = document.querySelector("#cantidad-integrantes");
    const cantidadIntegrantes = Number($cantidadIntegrantes.value);

    borrarIntegrantesAnteriores();
    crearIntegrante(cantidadIntegrantes);

    event.preventDefault();
};

document.querySelector("#calcular").onclick = function(event) {
    const numeros = obtenerEdadesIntegrantes();
    mostrarEdad('mayor', calcularMayorNumero(numeros));
    mostrarEdad('menor', calcularMenorNumero(numeros));
    mostrarEdad('promedio', calcularPromedio(numeros));
    mostrarResultados();

    event.preventDefault();
};

document.querySelector("#resetear").onclick = resetear;

function borrarIntegrantesAnteriores() {
    const $integrantes = document.querySelectorAll(".integrante");
    for (let i=0; i< $integrantes.length; i++) {
        $integrantes[i].remove();
    }
}

function crearIntegrantes(cantidadIntegrantes) {

    if (cantidadIntegrantes > 0) {
        mostrarBotonCalculo();
    } else {
        resetear();
    }

    for (let i = 0; i < cantidadIntegrantes; i++) {
        crearIntegrante(i);
    }
}

function crearIntegrante(indice) {
    const $div = document.createElement("div");
    $div.className = 'integrante';
    
    const $label = document.createElement("label");
    $label.textContent = "Edad del integrante #: " + (indice + 1);
    const $input = document.createElement("input");
    $input.type = "number";

    $div.appendChild($label);
    $div.appendChild($input);

    const $integrantes = document.querySelector("#integrantes");
    $integrantes.appendChild($div);
}

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
