const botonIngresar = document.querySelector("#Ingresar")

botonIngresar.onclick = function(){    
    
    const nombreUsuario = document.querySelector("#primer-nombre-usuario").value
    const segundoNombreUsuario = document.querySelector("#segundo-nombre-usuario").value
    const apellidoUsuario = document.querySelector("#apellido-usuario").value
    const edadUsuario = document.querySelector("#edad-usuario").value
    
  
    const nodoPagina = document.querySelector("form")
    const nuevoParrafo = document.createElement("p")
    const nuevoTexto = document.createTextNode(`${nombreUsuario}   ${segundoNombreUsuario}  ${apellidoUsuario} , ${edadUsuario}`)
    nuevoParrafo.appendChild(nuevoTexto)
    nodoPagina.appendChild(nuevoParrafo)
    document.querySelector("h1").innerText = `Bienvenido, ${nombreUsuario}!`


    return false;

}

const botonLimpiar = document.querySelector("#reset")
botonLimpiar.onclick = function(){
    limpiarPagina()
}

function limpiarPagina(){ 
    let $p = document.querySelector("p")
    let form = document.getElementById("datos-usuario")
    document.querySelector("h1").innerText = "Bienvenido!"
    form.removeChild($p)
}
