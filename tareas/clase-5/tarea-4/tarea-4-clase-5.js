document.querySelector('#calcular-promedio').onclick = function () {
    const listaDeNumeros = document.querySelectorAll('.numero');
    let acumulador = 0;
    for (let i = 0; i < listaDeNumeros.length; i++) {
        const numero = Number(listaDeNumeros[i].innerText);
        acumulador += numero;
        for (let i = 0; i < acumulador.length; i++) {}
    }
    document.querySelector('.suma-numeros-total').innerText = `La suma total de todos los numeros es: ${acumulador}`;

    const promedio = acumulador / listaDeNumeros.length;

    document.querySelector('.numero-promedio').innerText = `El promedio es: ${promedio}`;
};
