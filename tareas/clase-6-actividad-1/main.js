
document.querySelector('#siguiente-paso').onclick = function (event) {

    const $cantidadIntegrantes = document.querySelector('#cantidad-integrantes').value;
    const cantidadIntegrantes = Number($cantidadIntegrantes);

    borrarIntegrantesAnteriores();
    borrarErroresAnteriores();

    const errorCantidadIntegrantes = validarCantidadIntegrantes(cantidadIntegrantes);

    const errores = {

        ['cantidad-integrantes'] : errorCantidadIntegrantes
    }

    const esExito = manejarErrores(errores) === 0;

    if (esExito) {
        crearIntegrantes(cantidadIntegrantes);
        mostrarBotonCalcular();
    }

    event.preventDefault();
}
