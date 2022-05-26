const $botonSiguiente = document.querySelector('#siguiente');

$botonSiguiente.onclick = function(){
    const cantIntegrantes = document.querySelector('#cantidad-integrantes').value;
    const cantidadIntegrantes = Number(cantIntegrantes);

    crearIntegrantes(cantidadIntegrantes);

    return false;
}

const $botonCalcular = document.querySelector('#calcular');

$botonCalcular.onclick = function(){
    const cantIntegrantes = document.querySelector('#cantidad-integrantes').value;
    const cantidadIntegrantes = Number(cantIntegrantes);

    const listaEdades = obtenerEdades(cantidadIntegrantes);

    const edadMayor = calcularEdadMayor(listaEdades);
    const edadMenor = calcularEdadMenor(listaEdades);
    const edadPromedio = calcularEdadPromedio(listaEdades);

    document.querySelector('#edad-mayor').textContent = edadMayor;
    document.querySelector('#edad-menor').textContent = edadMenor;
    document.querySelector('#edad-promedio').textContent = edadPromedio;

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

function obtenerEdades(cantidadIntegrantes){
    const listaEdades = [];

    for(let i = 0; i < cantidadIntegrantes; i++){
        listaEdades.push(Number(document.querySelectorAll('input')[i + 1].value));
    }
    return listaEdades;
}

function calcularEdadMayor(listaEdades){
    let edadMayor = listaEdades[0];
    for(let i = 0; i < listaEdades.length; i++){
        let edadCualquiera = listaEdades[i];
        if(edadCualquiera > edadMayor){
            edadMayor = edadCualquiera;
        }
    }
    return edadMayor
}

function calcularEdadMenor(listaEdades){
    let edadMenor = listaEdades[0];
    for(let i = 0; i < listaEdades.length; i++){
        let edadCualquiera = listaEdades[i];
        if(edadCualquiera < edadMenor){
            edadMenor = edadCualquiera;
        }
    }
    return edadMenor;
}

function calcularEdadPromedio(listaEdades){
    let sumaEdades = 0;
    for(let i = 0; i < listaEdades.length; i++){
        sumaEdades = sumaEdades + listaEdades[i];
    }
    return sumaEdades / listaEdades.length;
}
