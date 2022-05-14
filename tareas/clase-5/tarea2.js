const $botonIngresar = document.querySelector("#ingresar")

$botonIngresar.onclick = function(){
    const $primerNombre = document.querySelector("#nombre-usuario").value 
    const $segundoNombre = document.querySelector("#nombre-usuario2").value
    const $apellido = document.querySelector("#apellido").value
    const $edadUsuario = Number(document.querySelector("#edad-usuario").value)

    let $Saludousuario = (`Bienvenido ${$primerNombre}`)


    let datosUsuario = `Verifique que sus datos sean correctos: 
  Nombres: ${$primerNombre} ${$segundoNombre} 
  Apellido: ${$apellido} 
  Edad: ${$edadUsuario}`

    document.querySelector("h1").innerText = $Saludousuario + "!"
    document.querySelector("#resultado").innerText = datosUsuario

}