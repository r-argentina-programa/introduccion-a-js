document.querySelector("#siguiente-paso").onclick = function(){

    const $cantidadIntegrantes = document.querySelector("#cantidad-integrantes");
    const cantidadIntegrantes = Number($cantidadIntegrantes.value);

    borrarIntegrantesAnteriores();

    crearIntegrantes(cantidadIntegrantes);

    return false;
}

document.querySelector("#calcular").onclick = function(){

    const edadesIntegrantes = obtenerEdadesIntegrantes();

    mostrarEdades(edadesIntegrantes);
 
    return false;
}

document.querySelector("#resetear").onclick = resetear;

function resetear(){

  borrarIntegrantesAnteriores();
  ocultarElemento('analisis');
  ocultarElemento('calcular');

}

function crearIntegrantes(cantidadIntegrantes) {

    if (cantidadIntegrantes !== 0) {
      mostrarElemento('calcular');
    } else {
      resetear();
    }
  
    for (let i = 0; i < cantidadIntegrantes; i++) {
      crearIntegrante(i);
    }

  }


  function borrarIntegrantesAnteriores() {
    const $integrantes = document.querySelectorAll('.integrante');
    for (let i = 0; i < $integrantes.length; i++) {
      $integrantes[i].remove();
    }
  }


  function mostrarElemento(nombreElemento) {
    document.querySelector(`#${nombreElemento}`).className = '';
  }
  function ocultarElemento(nombreElemento) {
    document.querySelector(`#${nombreElemento}`).className = 'oculto';
  }

  function ocultarResultados() {
    document.querySelector('#analisis').className = 'oculto';
  }

  function mostrarEdades(edadesIntegrantes) {
    document.querySelector('#mayor-edad').textContent = obtenerMayorNumero(edadesIntegrantes);
    document.querySelector('#menor-edad').textContent = obtenerMenorNumero(edadesIntegrantes);
    document.querySelector('#promedio-edad').textContent = obtenerPromedioNumeros(edadesIntegrantes);
    mostrarElemento('analisis');
  }


  function crearIntegrante(indice) {

    const $integrante = document.createElement('div');
    $integrante.className = 'integrante';
  
    const $label = document.createElement('label');
    $label.textContent = `Edad del integrante #${indice + 1}: `;
    const $input = document.createElement('input');
    $input.type = 'number';
  
    
    $integrante.appendChild($label);
    $integrante.appendChild($input);
    
  
    const $integrantes = document.querySelector('#integrantes');
    $integrantes.appendChild($integrante);
  }

  function obtenerEdadesIntegrantes(){

    const $integrantes = document.querySelectorAll('.integrante input');
    const edadesIntegrantes = [];

    for (let i = 0; i < $integrantes.length; i++) {
        if($integrantes[i].value !== ""){
          edadesIntegrantes.push(Number($integrantes[i].value));
        }
        
      }

      return edadesIntegrantes;

  }

  function obtenerMayorNumero(numeros) {
    let mayorNumero = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
      if (numeros[i] > mayorNumero) {
        mayorNumero = numeros[i];
      }
    }
  
    return mayorNumero;
  }

  function obtenerMenorNumero(numeros) {
    let menorNumero = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
      if (numeros[i] < menorNumero) {
        menorNumero = numeros[i];
      }
    }
  
    return menorNumero;
  }

  function obtenerPromedioNumeros(numeros) {
    let promedios = 0;
    for (let i = 1; i < numeros.length; i++) {
      promedios += numeros[i];
    }
  
    return (promedios/numeros.length).toFixed(2);
  }

  function validarCantidadIntegrantes(cantidad){
    
    if(!/^\d+$/.test(cantidad)){
        return "el campo cantidad solo acepta numeros enteros, no decimales";
    }


    return '';
}
  
  





