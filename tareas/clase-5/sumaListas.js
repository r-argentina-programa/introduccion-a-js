document.querySelector('#calcular').onclick = function(event) {
    seleccionarLista();

    event.preventDefault();
};

function promedio($lista) {
    let suma = 0;
    for (let i = 0; i < $lista.length; i++) {
        suma += Number($lista[i].textContent);
    };

    let $div = document.createElement('div');
    let $p = document.createElement('p');
    let $texto = document.createTextNode('El numero Promedio es ' + (suma / $lista.length).toFixed(2));

    $div.appendChild($p);
    $div.appendChild($texto);

    let $resultado = document.querySelector('#oculto');
    $resultado.appendChild($div);


    console.log('Promedio ' + (suma / $lista.length).toFixed(2));
};

function minimo($lista) {
    let menor = $lista[0].textContent;
    for (let i = 1; i < $lista.length; i++) {
        if ($lista[0].textContent > $lista[i].textContent) {
            menor = $lista[i].textContent;
        };
    };

    let $div = document.createElement('div');
    let $p = document.createElement('p');
    let $texto = document.createTextNode('El numero menor es ' + menor);

    $div.appendChild($p);
    $div.appendChild($texto);

    let $resultado = document.querySelector('#oculto');
    $resultado.appendChild($div);

    console.log(`Menor ${menor}`);
};

function mayor($lista) {
    let mayor = $lista[0].textContent;
    for (let i = 0; i < $lista.length; i++) {
        if ($lista[0].textContent < $lista[i].textContent) {
            mayor = $lista[i].textContent;
        };
    };

    let $div = document.createElement('div');
    let $p = document.createElement('p');
    let $texto = document.createTextNode('El numero Mayor es ' + mayor);

    $div.appendChild($p);
    $div.appendChild($texto);

    let $resultado = document.querySelector('#oculto');
    $resultado.appendChild($div);

    console.log(`Mayor ${mayor}`);
};

function moda($lista) {
    let moda = [];
    for (let ii = 0; ii < $lista.length; ii++) {

        for (let i = 0; i < $lista.length; i++) {
            if ($lista[ii].textContent === $lista[i].textContent && i !== ii) {

                moda.push($lista[ii].textContent);
            };
        };
    };
    let $div = document.createElement('div');
    let $p = document.createElement('p');
    let $texto = document.createTextNode(`El numero Moda es ${moda[0]}`);

    $div.appendChild($p);
    $div.appendChild($texto);

    let $resultado = document.querySelector('#oculto');
    $resultado.appendChild($div);




    console.log(`Moda ${moda[0]}`);
};

function seleccionarLista() {
    const $lista = document.querySelectorAll('ol li');

    promedio($lista);
    minimo($lista);
    mayor($lista);
    moda($lista);
};

// como se saca la moda de un array