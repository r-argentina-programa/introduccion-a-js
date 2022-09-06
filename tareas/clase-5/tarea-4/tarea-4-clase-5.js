document.querySelector('#calcular-promedio').onclick = function () {
    const listaDeNumeros = document.querySelectorAll('.numero');
    let acumulador = 0;
    let minimo = 999999999999;
    for (let i = 0; i < listaDeNumeros.length; i++) {
        const numero = Number(listaDeNumeros[i].innerText);
        acumulador += numero;

        if (numero < minimo) {
            minimo = numero;
        }
    }
    console.log('El numero minimo es ' + minimo);

document.querySelector('.numero-pequenio').innerText = `El numero mas pequeño es ${minimo} `
    document.querySelector('.suma-numeros-total').innerText = `La suma total de todos los numeros es: ${acumulador}`;

    const promedio = acumulador / listaDeNumeros.length;

    document.querySelector('.numero-promedio').innerText = `El promedio es: ${promedio}`;
};
