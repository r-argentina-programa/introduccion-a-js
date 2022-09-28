const botonSiguiente = document.querySelector('#siguiente-paso');

botonSiguiente.onclick = function () {
    const cantidadDeIntegrantes = conseguirCantidadDeIntegrantes();
    crearInputyLabelPorCadaIntegrante(cantidadDeIntegrantes);
    const botonCalcularEdades = document.createElement('button');
    botonCalcularEdades.textContent = 'Calcular';
    const body = document.querySelector('body');
    body.appendChild(botonCalcularEdades);
    return false;
};

function conseguirCantidadDeIntegrantes() {
    const cantidadDeIntegrantes = document.querySelector('#cantidad-integrantes');
    return cantidadDeIntegrantes;
}

function crearInputyLabelPorCadaIntegrante(cantidadDeIntegrantes) {
    const body = document.querySelector('body');
    const contenedor = document.createElement('div');
    body.appendChild(contenedor);

    for (let i = 0; i < cantidadDeIntegrantes.value; i++) {
        const inputEdadUsuario = document.createElement('input');
        inputEdadUsuario.setAttribute('class', `input-edad-usuarios`);
        const labelEdadUsuario = document.createElement('label');
        labelEdadUsuario.setAttribute('class', `label-edad-usuarios`);
        labelEdadUsuario.textContent = 'Ingresa tu edad';
        contenedor.appendChild(inputEdadUsuario);
        contenedor.appendChild(labelEdadUsuario);
    }
}
/* El objeto "document" también nos da maneras de crear nodos desde cero.

document.createElement('div'); // crea un nuevo elemento llamado 'div'.
document.createTextNode('foobar'); // crea un nuevo texto que contiene 'foobar'
existingNode.appendChild(newNode); // agrega un newNode al final de existingNode.

Ejemplo:

const nodoPagina = document.querySelector('body');
const nuevoParrafo = document.createElement('p');
const textoParrafo = document.createTextNode('Yeeee!');
nuevoParrafo.appendChild(textoParrafo);
nodoPagina.appendChild(nuevoParrafo); */
