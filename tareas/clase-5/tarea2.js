const $saludoUsuario = document.querySelector("#ingreso-usuario");

$saludoUsuario.onclick = function() {

    const $titulo = document.querySelector("h1");
    const nombreUsuario = document.querySelector("#nombre-usuario").value;
    const apellidoUsuario = document.querySelector("#apellido-usuario").value;
    const edadUsuario = Number(document.querySelector("#edad-usuario").value);

    if(puedeEntrar(edadUsuario)){
        $titulo.textContent = `Bienvenido al bar ${nombreUsuario}`;
    }else{
        $titulo.textContent = `No podes ingresar al bar ${nombreUsuario}`;
    }

    const $textoResultado = document.querySelector("#resultado");
    $textoResultado.textContent = `Datos del usuario: ${nombreUsuario} ${apellidoUsuario} edad = ${edadUsuario}`;
    $textoResultado.style.display = "block";

    return false;
}

function puedeEntrar(edadUsuario) {
    edadMinimaParaIngresar = 18;
    if(edadMinimaParaIngresar > edadUsuario){
        return false;
    }else{
        return true;
    }
}
