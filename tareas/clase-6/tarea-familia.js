document.querySelector('#añadir-cantidad-integrantes').onclick = function(event) {
    const $cantidadIntegrantes = document.querySelector('#cantidad-integrantes');
    const cantidadIntegrantes = Number($cantidadIntegrantes.value);

    borrarIntegrantesAnteriores();
    crearIntegrantes(cantidadIntegrantes);

    event.preventDefault();
};

function borrarIntegrantesAnteriores() {
    const $integrantes = document.querySelectorAll('.integrantes');
    for (let i = 0; i < $integrantes.length; i++) {
        $integrante[i].remove;
    }
}

