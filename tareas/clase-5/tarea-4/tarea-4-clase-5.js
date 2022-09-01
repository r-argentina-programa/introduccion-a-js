document.querySelector('#calcular-promedio').onclick = function () {
    const listaDeNumeros = document.querySelectorAll('.lista-desordenada');
    for (let i = 0; i < listaDeNumeros.length; i++) {
        const element = Number(listaDeNumeros[i].innerHTML);
    }
};
