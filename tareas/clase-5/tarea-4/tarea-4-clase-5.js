document.querySelector('#calcular-promedio').onclick = function () {
    const listaDeNumeros = document.querySelectorAll('.lista-desordenada');
   for (let i = 0; i < listaDeNumeros.length; i++) {
    const numerosDeLaLista = Number(listaDeNumeros[i].innerText);
    console.log(numerosDeLaLista);
    
    let numerosDeLaListaEnArray = 0;
    numerosDeLaListaEnArray.push(numerosDeLaLista)
    console.log(numerosDeLaListaEnArray);
   }
    }

