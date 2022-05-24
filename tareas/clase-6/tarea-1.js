const $botonSiguiente = document.querySelector('#siguiente');

$botonSiguiente.onclick = function(){
    const cantIntegrantes = document.querySelector('#cantidad-integrantes').value;
    const cantidadIntegrantes = Number(cantIntegrantes);

    crearIntegrantes(cantidadIntegrantes);

    return false;
}

const $botonCalcular = document.querySelector('#calcular');

$botonCalcular.onclick = function(){

    return false;
}

function crearIntegrantes(cantidadIntegrantes){
    for(let i = 0; i < cantidadIntegrantes; i++){
        const $div = document.createElement('div');
        $div.className = 'integrante';

        const $label = document.createElement('label');
        $label.textContent = (`Integrante #${i + 1}`);

        const $input = document.createElement('input');
        $input.type = 'number';

        $div.appendChild($label);
        $div.appendChild($input);

        const $integrantes = document.querySelector('#integrantes');
        $integrantes.appendChild($div);
    }   
}
