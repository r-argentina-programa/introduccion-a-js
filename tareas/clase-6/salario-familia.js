document.querySelector("#boton-agregar").onclick = function(){

    const $cantidadIntegrantes = document.querySelector("#salario-anual-integrante");
    const salarioIntegrante = Number($cantidadIntegrantes.value);

    //borrarIntegrantesAnteriores();

    crearIntegrante(salarioIntegrante);

    document.querySelector("#salario-anual-integrante").value = '';
    


    return false;

}

document.querySelector("#calcular").onclick = function(){

    const salariosIntegrantes = obtenerSalariosIntegrantes();

    mostrarsalarios(salariosIntegrantes);
 
    return false;
}

document.querySelector("#resetear").onclick = resetear;

function resetear(){

  borrarIntegrantesAnteriores();
  ocultarResultados();
  ocultarBotonCalculo();

}

document.querySelector("#boton-quitar").onclick = function(){

  borrarUltimoIntegrante();

}


  function borrarUltimoIntegrante() {
    const $integrantes = document.querySelectorAll('.integrante');
    console.log($integrantes);
    $integrantes[$integrantes.length - 1].remove();
  }


  function mostrarBotonCalcular() {
    document.querySelector('#calcular').className = '';
  }
  function ocultarBotonCalculo() {
    document.querySelector('#calcular').className = 'oculto';
  }

  function ocultarResultados() {
    document.querySelector('#analisis').className = 'oculto';
  }
  
  function mostrarResultados() {
    document.querySelector('#analisis').className = '';
  }

  function mostrarsalarios(salariosIntegrantes) {
    document.querySelector('#mayor-salario-anual').textContent = obtenerMayorSalarioAnual(salariosIntegrantes);
    document.querySelector('#menor-salario-anual').textContent = obtenerMenorSalarioAnual(salariosIntegrantes);
    document.querySelector('#promedio-salario-anual').textContent = obtenerPromedioSalarioAnual(salariosIntegrantes);
    document.querySelector('#promedio-salario-mensual').textContent = obtenerPromedioSalarioMensual(salariosIntegrantes);
    mostrarResultados();
  }


  function crearIntegrante(salarioIntegrante) {

    const $div = document.createElement('div');
    $div.className = 'integrante';
  
    const $label = document.createElement('label');
    $label.textContent = "Salario Anual del Integrante: ";
    const $input = document.createElement('input');
    if(salarioIntegrante === 0){
        $input.value = '';
    }else{
        $input.value = salarioIntegrante;
    }
    
    $input.disabled = true;
    $input.type = 'number';
  
    
    $div.appendChild($label);
    $div.appendChild($input);
    
  
    const $integrantes = document.querySelector('#integrantes');
    $integrantes.appendChild($div);

    mostrarBotonCalcular();

  }

  function obtenerSalariosIntegrantes(){

    const $integrantes = document.querySelectorAll('.integrante input');
    const salariosIntegrantes = [];

    for (let i = 0; i < $integrantes.length; i++) {

        if(Number($integrantes[i].value) !== 0){
            salariosIntegrantes.push(Number($integrantes[i].value));
        }

    }

    

      console.log(salariosIntegrantes);

      return salariosIntegrantes;

  }

// funciones de calculo:

  function obtenerMayorSalarioAnual(salarios) {
    let mayorSalario = salarios[0];
    for (let i = 0; i < salarios.length; i++) {
      if (salarios[i] > mayorSalario) {
        mayorSalario = salarios[i];
      }
    }
  
    return mayorSalario;
  }

  function obtenerMenorSalarioAnual(salarios) {
    let menorSalario = salarios[0];
    for (let i = 0; i < salarios.length; i++) {
      if (salarios[i] < menorSalario) {
        menorSalario = salarios[i];
      }
    }
  
    return menorSalario;
  }

  function obtenerPromedioSalarioAnual(salariosAnuales) {
    let promedios = 0;
    for (let i = 0; i < salariosAnuales.length; i++) {
      promedios += salariosAnuales[i];
    }

  
    return (promedios/salariosAnuales.length);
  }

  function obtenerPromedioSalarioMensual(salariosAnuales) {

    let promedios = 0;
    salariosMensuales = [];


    for (let i = 0; i < salariosAnuales.length; i++) {
        
      promedios += salariosAnuales[i]/12;
    }

    

      
  
    return (promedios/salariosAnuales.length).toFixed(2);
  }
  
  





