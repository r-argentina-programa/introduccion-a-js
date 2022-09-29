const $botonSiguiente = document.querySelector('#siguiente-paso');

$botonSiguiente.onclick = function () {
    const cantidadDeFamiliares = document.querySelector('#cantidad-integrantes').value;

    const contenedor = document.querySelector('#integrantes');
    for (let i = 0; i < cantidadDeFamiliares; i++) {
        const label = document.createElement('label');
        label.textContent = 'Edad deIntegrante #' + (i + 1);
        contenedor.appendChild(label);
        const input = document.createElement('input');
        input.type = 'number';
        input.className = 'edad-integrante';
        contenedor.appendChild(input);
    }
};

const $botonCalcular = document.querySelector('#calcular');

$botonCalcular.onclick = function () {
    const $edadesIntegrantes = document.querySelectorAll('.edad-integrante');
    let edadesIntegrantes = [];
    for (let i = 0; i < $edadesIntegrantes.length; i++) {
        let elementoNodo = $edadesIntegrantes[i];
        const edad = Number(elementoNodo.value);
        edadesIntegrantes.push(edad);
    }

    const $numeroMayor = document.querySelector('#mayor-edad');
    $numeroMayor.textContent = `${obtenerEdadMayorEdad(edadesIntegrantes)}`;
    const $numeroMenor = document.querySelector('#menor-edad');
    $numeroMenor.textContent = `${obtenerEdadMenorEdad(edadesIntegrantes)}`;
    const $promedio = document.querySelector('#promedio-edad');
    $promedio.textContent = `${calcularPromedio(edadesIntegrantes)}`;
};
