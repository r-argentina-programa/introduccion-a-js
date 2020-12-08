const nomberUsuario = document.querySelector('#userName');
const edadUsuario  = document.querySelector('#userAge');
const ingresar = document.querySelector('#ingresar');
const nuevoParrafo = document.createElement('p')
let dResultado = document.querySelector('#divResultado')
let texto = ''

let creaP = function() {
    var elementExists = document.querySelector('#dResultado')
    dResultado.append(nuevoParrafo)
    var nParr = document.querySelector('p')
    nParr.id = 'resultado' 
}

let chequeoNombre = function() {
    if (nomberUsuario.value == "") {
        alert(`ingresa un nombre`)
        return false
    } else {
        return true
    }

}

ingresar.onclick = function() {
    if (chequeoNombre()) {
        if (edadUsuario.value >= 18) {
            creaP()
            texto = document.createTextNode(`Hola ${nomberUsuario.value}, sos mayor, podes entrar!`)
            document.querySelector('#resultado').appendChild(texto)
        } else {
            creaP()
            texto = document.createTextNode(`Hola ${nomberUsuario.value}, sos menor, no podes entrar!`)
            document.querySelector('#resultado').appendChild(texto)
        }
        return false;
}
}
