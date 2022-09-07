document.querySelector('#calcular-promedio').onclick = function () {
    const listaDeNumeros = document.querySelectorAll('.numero');
    let acumulador = 0;
    for (let i = 0; i < listaDeNumeros.length; i++) {
        const numero = Number(listaDeNumeros[i].innerText);
        acumulador += numero;
    }
    document.querySelector('.numero-pequenio').innerText = `El numero mas pequeño es `;
    document.querySelector('.numero-mayor').innerText = `El numero mas grande es `;
    document.querySelector('.numero-repetido').innerText = `El numero mas frecuente es `;
    document.querySelector('.suma-numeros-total').innerText = `La suma total de todos los numeros es: ${acumulador}`;

    const promedio = acumulador / listaDeNumeros.length;

    document.querySelector('.numero-promedio').innerText = `El promedio es: ${promedio}`;
};
