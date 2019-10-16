
let nuestroTitulo = document.querySelector('h1');
console.log(nuestroTitulo);
console.log(nuestroTitulo.innerText);
nuestroTitulo.textContent = ('Hola ' + prompt("Ingresa tu nombre") + '!');
console.log(nuestroTitulo.textContent);



const $botonIngreso = document.querySelector('#ingresar') //Se estila usar '$' delante de un elemento que pertenece a html

$botonIngreso.onclick = function (evento) {
    const edadUsuario = Number(document.querySelector('#edad-usuario').value);
    let textoResultado;
    (edadUsuario >= 18) ? textoResultado = `Pase nomas` : textoResultado = `No podes pasar`;

    document.querySelector('#resultado').innerText = textoResultado;
    evento.cancel();
}

