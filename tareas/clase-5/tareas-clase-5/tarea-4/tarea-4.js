document.querySelector('#calcular-promedio').onclick = function () {
    const listaDeNumeros = document.querySelectorAll('.numero');
    let acumulador = 0;
    for (let i = 0; i < listaDeNumeros.length; i++) {
        const numero = Number(listaDeNumeros[i].innerText);
        acumulador += numero;

    const numeroPequenio = encontrarNumeroMinimo(numero);
    document.querySelector('.numero-pequenio').innerText = `El numero pequenio es ${numeroPequenio}`;
    document.querySelector('.suma-numeros-total').innerText = `La suma total de todos los numeros es: ${acumulador}`;

    const promedio = calcualPromedio(acumulador, listaDeNumeros);
    document.querySelector('.numero-promedio').innerText = `El promedio es ${promedio}`;
};

function calcualPromedio(acumulador, listaDeNumeros) {
    return acumulador / listaDeNumeros.length;
}

        function encontrarNumeroMinimo(numero) {
            let numeroMinimo = numero[0];
            for (let i = 0; i < numero.length; i++) {
                let numero = numero[i];

                if (numero < numeroMinimo) {
                    numeroMinimo = numero;
                }

                return numeroMinimo;
            }
            console.log('EL numero minimo' + numeroMinimo);
        }
    }