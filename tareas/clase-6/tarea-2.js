const $botonAgregar = document.querySelector('#agregar');

$botonAgregar.onclick = function(){
    agregarIntegrante();

    return false;
}

const $botonEliminar = document.querySelector('#eliminar');

$botonEliminar.onclick = function(){

}

const $botonCalcular = document.querySelector('#calcular');

$botonCalcular.onclick = function(){
    // const cantIntegrantes = document.querySelector('#integrantes').length;
    // const cantidadIntegrantes = Number(cantIntegrantes);

    const cantIntegrantes = document.querySelectorAll('input').length;
    const cantidadIntegrantes = Number(cantIntegrantes);

    const listaSalario = obtenerSalario(cantidadIntegrantes);
    
    const salarioMayor = calcularSalarioMayor(listaSalario);
    const salarioMenor = calcularSalarioMenor(listaSalario);
    const salarioPromedio = calcularSalarioPromedio(listaSalario);

    document.querySelector('#salario-mayor').textContent = salarioMayor;
    document.querySelector('#salario-menor').textContent = salarioMenor;
    document.querySelector('#salario-promedio').textContent = salarioPromedio;

    return false;
}

function agregarIntegrante(){
    const $div = document.createElement('div');
    $div.className = 'integrante';

    const $label = document.createElement('label');
    $label.textContent = 'Ingresar Salario Anual '

    const $input = document.createElement('input');
    $input.type = 'number';

    $div.appendChild($label);
    $div.appendChild($input);

    const $integrantes = document.querySelector('#integrantes');
    $integrantes.appendChild($div);
}

function obtenerSalario(cantidadIntegrantes){
    const listaSalario = [];

    for(let i = 0; i < cantidadIntegrantes; i++){
        listaSalario.push(Number(document.querySelectorAll('input')[i].value));
    }

    return listaSalario;
}

function calcularSalarioMayor(listaSalario){
    let salarioMayor = listaSalario[0];

    for(let i = 0; i < listaSalario.length; i++){
        salarioCualquiera = listaSalario[i];
        if(salarioCualquiera > salarioMayor){
            salarioMayor = salarioCualquiera;
        }
    }

    return salarioMayor;
}

function calcularSalarioMenor(listaSalario){
    let salarioMenor = listaSalario[0];

    for(let i = 0; i < listaSalario.length; i++){
        salarioCualquiera = listaSalario[i];
        if(salarioCualquiera < salarioMenor){
            salarioMenor = salarioCualquiera;
        }
    }

    return salarioMenor;
}

function calcularSalarioPromedio(listaSalario){
    let sumaSalario = 0;
    
    for(let i = 0; i < listaSalario.length; i++){
        sumaSalario = sumaSalario + listaSalario[i];
    }

    return sumaSalario / listaSalario.length;
}
