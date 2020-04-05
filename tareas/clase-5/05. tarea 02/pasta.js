// SEGUNDA TAREA
//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!
/*
const $botonCalcular = document.querySelector("#boton-calcular");

$botonCalcular.onclick = function() {
    const salarioAnual = Number(document.querySelector("#salarioanual").value);
    const salarioMensual = salarioAnual / 12
    console.log(salarioMensual)
    document.getElementById("salario-mensual").value = salarioMensual;
    // document.getElementById("salario-mensual").innerHTML = salarioMensual;     
    return false;
}
*/



function getInputIntoText() {
  userName = document.getElementById('name').value;
  const userSecondName = document.getElementById('second_name').value;
  const userSurname = document.getElementById('surname').value;
  const userAge = Number(document.getElementById('age').value);
  document.getElementById('usernameText').replaceWith(userName)
  document.getElementById('userSecondNameText').replaceWith(userSecondName)
  document.getElementById('userSurnameText').replaceWith(userSurname)
  document.getElementById('userAgeText').replaceWith(userAge)
  document.getElementById('assignedUsernameText').replaceWith(userName)
};

var userName;
const $joinButton = document.querySelector("#join-button");

$joinButton.onclick = function() {

  getInputIntoText();
if (Number(document.getElementById('age').value) > 18){
// get the element
var div1 = document.getElementById('form-hide');

// set an event listener for it
 div1.addEventListener('click',function(){

 this.parentNode.removeChild(this);

  document.querySelector("#reveal-text").style.display = "block";
  
  const newPastaHeader = `Welcome to <br>the Pasta Club, ${userName}!`
  document.getElementById('pasta-header').innerHTML = newPastaHeader
  document.querySelector("h1").style.marginTop = "3%";
});

}
else{
  var div1 = document.getElementById('form-hide');

// set an event listener for it
 div1.addEventListener('click',function(){

 this.parentNode.removeChild(this);

  document.querySelector("#under-18").style.display = "block";

  const newPastaHeader = `We are sorry...`
  document.getElementById('pasta-header').innerHTML = newPastaHeader
  document.querySelector("h1").style.marginTop = "15%";
});
}





}