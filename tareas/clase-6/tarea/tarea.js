/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

document.querySelector("#enviar-cantidad-integrantes").onclick = function () {
    const $cantidadIntegrantes = document.querySelector("#cantidad-integrantes");
    const cantidadIntegrantes = Number($cantidadIntegrantes.value)

    if (cantidadIntegrantes <= 0) return false;

    borrarIntegrantesAnteriores();
    crearIntegrantes(cantidadIntegrantes);
    mostrarControles();
    ocultarResultados();

    $cantidadIntegrantes.value = "";
    return false;
}

document.querySelector("#borrar").onclick = function () {
    resetear();
}

function crearIntegrantes(cantidadIntegrantes) {
    for (let i = 0; i < cantidadIntegrantes; i++) {
        crearIntegrante(i);
    }
}

function borrarIntegrantesAnteriores() {
    const $integrantesAnteriores = document.querySelectorAll(".integrante")

    for (let i = 0; i < $integrantesAnteriores.length; i++) {
        $integrantesAnteriores[i].remove();
    }
}

function mostrarControles() {
    const $divControles = document.querySelector(".controles");
    $divControles.classList.remove("hidden");
}
function ocultarControles() {
    const $divControles = document.querySelector(".controles");
    $divControles.classList.add("hidden");
}

// Recibe un NodeList de inputs de edades y devuelve true si alguna de las edades es inválida
function validarInputsEdadesUsuario(inputsEdades) {
    let tieneInputsInvalidos = false;
    for (let i = 0; i < inputsEdades.length; i++) {
        if (inputsEdades[i].value <= 0) tieneInputsInvalidos = true;
    }

    return tieneInputsInvalidos;
}

function dameMayor(numeros) {
    let numeroMayor = numeros[0];

    for (let i = 0; i < numeros.length; i++) {
        numeros[i] >= numeroMayor ? numeroMayor = numeros[i] : "";
    }

    return numeroMayor;
}

function dameMenor(numeros) {
    let numeroMenor = numeros[0];

    for (let i = 0; i < numeros.length; i++) {
        numeros[i] <= numeroMenor ? numeroMenor = numeros[i] : "";
    }

    return numeroMenor;
}

function damePromedio(numeros) {
    if (numeros.length === 0) return 0;

    let sumaTotal = 0;

    for (let i = 0; i < numeros.length; i++) {
        sumaTotal += numeros[i];
    }

    return (sumaTotal / numeros.length).toFixed(2);
}

function mostrarResultados() {
    document.querySelector(".resultados").classList.remove("hidden");
}

function ocultarResultados() {
    document.querySelector(".resultados").classList.add("hidden");
}

function resetear() {
    borrarIntegrantesAnteriores();
    ocultarControles();
    ocultarResultados();
}

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels 
para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, 
menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

document.querySelector("#calcular").onclick = function () {
    const $edadesIntegrantes = document.querySelectorAll(".edad-integrante");
    const $salarioIntegrantes = document.querySelectorAll(".salario-integrante");

    if (validarInputsEdadesUsuario($edadesIntegrantes)) return false;

    const edadesIntegrantes = [];
    for (let i = 0; i < $edadesIntegrantes.length; i++) {
        edadesIntegrantes.push(Number($edadesIntegrantes[i].value));
    }

    const salarioIntegrantes = [];
    for (let i = 0; i < $salarioIntegrantes.length; i++) {
        if ($salarioIntegrantes[i].value > 0) {
            salarioIntegrantes.push(Number($salarioIntegrantes[i].value));
        }
    }

    document.querySelector("#edad-mayor").textContent = dameMayor(edadesIntegrantes);
    document.querySelector("#edad-menor").textContent = dameMenor(edadesIntegrantes);
    document.querySelector("#edad-promedio").textContent = damePromedio(edadesIntegrantes);
    document.querySelector("#salario-anual-mayor").textContent = dameMayor(salarioIntegrantes);
    document.querySelector("#salario-anual-menor").textContent = dameMenor(salarioIntegrantes);
    document.querySelector("#salario-anual-promedio").textContent = damePromedio(salarioIntegrantes);
    document.querySelector("#salario-mensual-promedio").textContent = damePromedioMensual(salarioIntegrantes);
    mostrarResultados();

    return false;
}

function crearIntegrante(indice) {
    const $div = document.createElement("div");
    $div.className = "integrante";

    const $h3 = document.createElement("h3");
    $h3.className = "h3";
    $h3.textContent = `Integrante #${indice + 1}:`

    const $label = document.createElement("label");
    $label.className = "label";
    $label.htmlFor = `edad-integrante-${indice + 1}`;
    $label.textContent = "Edad: ";

    const $input = document.createElement("input");
    $input.type = "number";
    $input.id = `edad-integrante-${indice + 1}`;
    $input.className = "input edad-integrante";
    $input.placeholder = "25...";

    const $label2 = document.createElement("label");
    $label2.className = "label";
    $label2.htmlFor = `integrante-trabaja-${indice + 1}`
    $label2.textContent = "Tiene trabajo";

    const $inputChkbox = document.createElement("input");
    $inputChkbox.type = "checkbox";
    $inputChkbox.id = `integrante-trabaja-${indice + 1}`;
    $inputChkbox.className = "input integrante-trabaja";

    $inputChkbox.onclick = function () {
        generarSalarioIntegrante($inputChkbox);
        mostrarIngresarSalario($inputChkbox);
    }

    $div.appendChild($h3);
    $div.appendChild($label);
    $div.appendChild($input);
    $div.appendChild($label2);
    $div.appendChild($inputChkbox);

    const $contenedorIntegrantes = document.querySelector(".integrantes");
    $contenedorIntegrantes.appendChild($div);
}

function mostrarIngresarSalario(nodoActual) {
    const $contenedorIngresarSalario = nodoActual.nextElementSibling;
    $contenedorIngresarSalario.lastElementChild.value = "";
    $contenedorIngresarSalario.classList.toggle("hidden");
}

function generarSalarioIntegrante(nodoActual) {
    if (!nodoActual.nextElementSibling) {

        const $nodoPadre = nodoActual.parentNode;

        const $div = document.createElement("div");
        $div.className = "ingresar-salario hidden";

        const $label = document.createElement("label");
        $label.className = "label";
        $label.textContent = "Salario anual";

        const $input = document.createElement("input");
        $input.type = "number";
        $input.className = "input salario-integrante";
        $input.placeholder = "Ingresa el salario anual...";

        $div.appendChild($label);
        $div.appendChild($input);
        $nodoPadre.appendChild($div);
    }
}

function damePromedioMensual(numerosAnuales) {
    return (damePromedio(numerosAnuales) / 12);
}
