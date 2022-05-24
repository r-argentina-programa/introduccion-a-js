const $botonSiguiente = document.querySelector('#siguiente');

$botonSiguiente.onclick = function(){
    const cantIntegrantes = document.querySelector('#cantidad-integrantes').value;
    const cantidadIntegrantes = Number(cantIntegrantes);
    console.log(cantidadIntegrantes);

    return false;
}
