document.querySelector('#procesar-informacion').onclick = function(){
    
    const primerNombre = document.querySelector("#primer-nombre").value;
    const segundoNombre = document.querySelector("#segundo-nombre").value;
    const apellidos = document.querySelector("#apellidos").value;
    const edadUsuario = Number(document.querySelector("#edad").value);

    document.querySelector('#mostrar-informacion').value = primerNombre + " " + segundoNombre + " " + apellidos + " " + edadUsuario;
    document.querySelector("#titulo").innerHTML = "Bienvenido, " + primerNombre;

    return false;
}
