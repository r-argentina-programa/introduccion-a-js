document.querySelector('#calcular-promedio').onclick = function () {
    const listaDeNumeros = document.querySelectorAll('.numero');
    let acumulador = 0;
    for (let i = 0; i < listaDeNumeros.length; i++) {
        const numero = Number(listaDeNumeros[i].innerText);
        console.log(numero);
        acumulador += numero;

        document.querySelector(
            '.suma-numeros-total',
        ).innerText = `La suma total de todos los numeros es: ${acumulador}`;

        const promedio = acumulador / listaDeNumeros.length;

        document.querySelector('.promedio').innerText = `El promedio es: ${promedio}`;
    }
};
