const $botonSiguiente = document.querySelector('#siguiente-paso');

$botonSiguiente.onclick = function () {
    console.log('me hiciste click');
    const cantidadDeFamiliares = document.querySelector('#cantidad-integrantes').value;
    console.log(cantidadDeFamiliares);
    const contenedor = document.querySelector('#integrantes');
    for (let i = 0; i < cantidadDeFamiliares; i++) {
        console.log(i);
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
    console.log('Estamos probando el boton de calcular');
    const $edadesIntegrantes = document.querySelectorAll('.edad-integrante');
    console.log($edadesIntegrantes);
    let edadesIntegrantes = [];
    for (let i = 0; i < $edadesIntegrantes.length; i++) {
        let elementoNodo = $edadesIntegrantes[i];
        const edad = Number(elementoNodo.value);
        edadesIntegrantes.push(edad);
    }
    console.log(edadesIntegrantes);

    const $numeroMayor = document.querySelector('#mayor-edad');
    $numeroMayor.textContent = `${obtenerLaMayorEdad(edadesIntegrantes)}`;
    const $numeroMenor = document.querySelector('#menor-edad');
    $numeroMenor.textContent = `${obtenerLaMenorEdad(edadesIntegrantes)}`;
    const $promedio = document.querySelector('#promedio-edad');
    $promedio.textContent = `${calcularPromedio(edadesIntegrantes)}`;
};
