/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad,
la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente,
 borrando los inputs ya creados (investigar cómo en MDN).
*/


document.querySelector('#siguiente-paso').onclick = function(event) {
  const $cantidadIntegrantes = document.querySelector('#cantidad-integrantes');
  const cantidadIntegrantes = Number($cantidadIntegrantes.value);

  borrarIntegrantesAnteriores();
  crearIntegrantes(cantidadIntegrantes);

  mostrarBotonCrearSalarios()

  event.preventDefault();
}

document.querySelector('#calcular').onclick = function(event) {
  const numeros = obtenerEdadesIntegrantes();
  mostrarEdad('mayor', obtenerMayorNumero(numeros));
  mostrarEdad('menor', obtenerMenorNumero(numeros));
  mostrarEdad('promedio', obtenerPromedio(numeros));
  mostrarResultados();

  event.preventDefault();
};

document.querySelector('#resetear').onclick = resetear;

function borrarIntegrantesAnteriores() {
  const $integrantes = document.querySelectorAll('.integrante');
  for (let i = 0; i < $integrantes.length; i++) {
    $integrantes[i].remove();
  }
}

function crearIntegrantes(cantidadIntegrantes) {

  if (cantidadIntegrantes > 0) {
    mostrarBotonCalculo();
  } else {
    resetear();
  }

  for (let i = 0; i < cantidadIntegrantes; i++) {
    crearIntegrante(i);
  }
}

function crearIntegrante(indice) {
  const $div = document.createElement('div');
  $div.className = 'integrante';

  const $label = document.createElement('label');
  $label.textContent = 'Edad del integrante #: ' + (indice + 1);
  const $input = document.createElement('input');
  $input.type = 'number';

  $div.appendChild($label);
  $div.appendChild($input);

  const $integrantes = document.querySelector('#integrantes');
  $integrantes.appendChild($div);
}

function resetear() {
  borrarIntegrantesAnteriores();
  ocultarBotonCalculo();
  ocultarResultados();
  borrarSalariosAnteriores();
  ocultarBotonSalarios();
  ocultarAnalisisSalarios();
  ocultarBotonCrearSalario();
  ocultarBotonQuitarSalarios();
  
}

function ocultarBotonCalculo() {
  document.querySelector('#calcular').className = 'oculto';
}

function mostrarBotonCalculo() {
  document.querySelector('#calcular').className = 'btn btn-primary';
}

function ocultarResultados() {
  document.querySelector('#analisis').className = 'oculto';
}

function mostrarResultados() {
  document.querySelector('#analisis').className = '';
}

function mostrarEdad(tipo, valor) {
  document.querySelector(`#${tipo}-edad`).textContent = valor;
}

function obtenerEdadesIntegrantes() {
  const $integrantes = document.querySelectorAll('.integrante input');
  const edades = [];
  for (let i = 0; i < $integrantes.length; i++) {
    edades.push(Number($integrantes[i].value));
  }
  return edades;
}

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/


const $botonCrearSalario = document.querySelector("#crear-salario")
$botonCrearSalario.onclick = function(event){
  const $cantidadSalarios = document.querySelector('#cantidad-integrantes');
  const cantidadSalarios = Number($cantidadSalarios.value);
  crearSalarios(cantidadSalarios);
  mostrarBotonSalarios();
  mostrarBotonQuitarSalarios()

  event.preventDefault();


}

const $botonQuitarSalario = document.querySelector("#quitar-salario")
$botonQuitarSalario.onclick = function(event){
  borrarSalariosAnteriores();

  event.preventDefault();
}

const $botonCalcularSalarios = document.querySelector("#calcular-salarios")
$botonCalcularSalarios.onclick = function(event){
  const array = obtenerSalariosIntegrantes();
  mostrarAnalisisSalarios();
  mostrarSalario( `mayor`, obtenerMayorSalario(array));
  mostrarSalario(`menor`, obtenerMenorSalario(array));
  mostrarSalario(`promedio`, obtenerPromedioSalarios(array));
  mostrarSalario(`promedio-mensual`, obtenerPromedioSalariosMensuales(obtenerSalariosMensuales(array)));

  event.preventDefault();
}


function crearSalario(indice){
  const div = document.createElement("div")
  div.className = "salario";

  const label = document.createElement("label")
  label.textContent = "Salario del integrante #: " + (indice + 1);

  const input = document.createElement("input")
  input.type = "number";

  div.appendChild(label);
  div.appendChild(input);

  const $salarios = document.querySelector("#salarios");
  $salarios.appendChild(div) ;


}

function crearSalarios(cantidadIntegrantes){
  for (let i = 0; i < cantidadIntegrantes; i++) {
    crearSalario(i);
}
}

function borrarSalariosAnteriores(){
  const asalariados = document.querySelectorAll(".salario")
  for (i = 0; i < asalariados.length; i++ ){
    asalariados[i].remove()
  } 
}

function mostrarBotonSalarios(){
  document.querySelector("#calcular-salarios").className = "btn btn-primary"
}

function ocultarBotonSalarios(){
  document.querySelector("#calcular-salarios").className = "oculto"
}

function mostrarBotonQuitarSalarios(){
  document.querySelector("#quitar-salario").className ="btn btn-danger";
}

function ocultarBotonQuitarSalarios(){
  document.querySelector("#quitar-salario").className ="oculto";
}

function mostrarBotonCrearSalarios(){
  document.querySelector("#crear-salario").className ="btn btn-primary";
}

function ocultarBotonCrearSalario(){
  document.querySelector("#crear-salario").className ="oculto";
}

function mostrarAnalisisSalarios(){
  document.querySelector("#analisis-salarios").className = "";

}

function ocultarAnalisisSalarios(){
  document.querySelector("#analisis-salarios").className = "oculto"; 
}

function mostrarSalario(tipo, valor){
  document.querySelector(`#${tipo}-salario`).textContent = valor;
}

function obtenerSalariosIntegrantes(){
  const $$salarios = document.querySelectorAll(".salario input")
  let arraySalarios = []
  for (i = 0; i < $$salarios.length; i++){
    if ($$salarios[i].value !== ""){
    arraySalarios.push(Number($$salarios[i].value))
    }
  } return arraySalarios



}
