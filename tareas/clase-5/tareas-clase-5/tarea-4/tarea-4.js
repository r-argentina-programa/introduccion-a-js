document.querySelector('#calcular-promedio').onclick = function () {
    const numerosEnListaLi = document.querySelectorAll('.numero');

    let listaDeNumeros = [];
    for (let i = 0; i < numerosEnListaLi.length; i++) {
        listaDeNumeros.push(Number(numerosEnListaLi[i].innerText));
    }
    function sumarNumeros(numeros) {
        let sumaTotal = 0;
        for (let i = 0; i < numeros.length; i++) {
            sumaTotal = sumaTotal + numeros[i];
        }
        return sumaTotal;
    }
    let numeros = listaDeNumeros;
    const sumaNumerosTotal = sumarNumeros(numeros);
    document.querySelector(
        '.suma-numeros-total',
    ).innerText = `La suma total de todos los numeros es: ${sumaNumerosTotal}`;
    
    
    function calcularPromedio(listaDeNumeros) {
        let resultado = 0;
        let promedio = 0;
        for (let i = 0; i < listaDeNumeros.length; i++) {
            resultado = resultado + listaDeNumeros[i];
            promedio = resultado / listaDeNumeros.length;
        }
        return promedio;
    }
    document.querySelector('.numero-promedio').innerText = `El promedio es: ${calcularPromedio(listaDeNumeros)}`;
    
    function encontrarNumeroMinimo(listaDeNumeros) {
        let numeroMinimo = listaDeNumeros[0];
        for (let i = 0; i < listaDeNumeros.length; i++) {
            if (listaDeNumeros[i] < numeroMinimo){
                numeroMinimo = listaDeNumeros[i];
            }
            return numeroMinimo
        }
        console.log(numeroMinimo);
    }
    document.querySelector('.numero-pequenio').innerText = `El numeor minimo es ${encontrarNumeroMinimo(listaDeNumeros)}`;

    function encontrarNumeroMaximo(listaDeNumeros){
        let numeroMaximo = listaDeNumeros[0];
        for (let i = 0; i < listaDeNumeros.length; i++) {
            if(listaDeNumeros[i] > numeroMaximo){
                numeroMaximo = listaDeNumeros[i]
            }
        }
        return numeroMaximo
    }
    document.querySelector('.numero-mayor').innerText = `El numero maximo es ${encontrarNumeroMaximo(listaDeNumeros)}`;

    function encontrarNumeroFrecuente(listaDeNumeros){
        let numeroFrecuente = listaDeNumeros[0];
        for (let i = 0; i < listaDeNumeros.length; i++) {
            if (listaDeNumeros[i] === listaDeNumeros[i +1]  && listaDeNumeros[i] !== numeroFrecuente[i]) {
            }
            numeroFrecuente = listaDeNumeros[i]
            
        }
        return numeroFrecuente
    }
    document.querySelector('.numero-repetido').innerText = `El numero mas frecuente es ${encontrarNumeroFrecuente(listaDeNumeros)}`;
};
