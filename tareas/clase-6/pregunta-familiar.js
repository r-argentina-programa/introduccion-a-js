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
  ocultarResultados();
  ocultarBotonCalculo();

}

function crearIntegrantes(cantidadIntegrantes) {

    if (cantidadIntegrantes !== 0) {
      mostrarBotonCalcular();
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

  function mostrarEdades(edadesIntegrantes) {
    document.querySelector('#mayor-edad').textContent = obtenerMayorNumero(edadesIntegrantes);
    document.querySelector('#menor-edad').textContent = obtenerMenorNumero(edadesIntegrantes);
    document.querySelector('#promedio-edad').textContent = obtenerPromedioNumeros(edadesIntegrantes);
    mostrarResultados();
  }


  function crearIntegrante(indice) {

    const $div = document.createElement('div');
    $div.className = 'integrante';
  
    const $label = document.createElement('label');
    $label.textContent = `Edad del integrante #${indice + 1}: `;
    const $input = document.createElement('input');
    $input.type = 'number';
  
    
    $div.appendChild($label);
    $div.appendChild($input);
    
  
    const $integrantes = document.querySelector('#integrantes');
    $integrantes.appendChild($div);
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

// funciones de calculo:

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


  // pruebas unitarias:


  function validarCantidadIntegrantes(cantidad){

    // haciendo expresiones regulares:
    if(!/^\d+$/.test(cantidad)){
        return "el campo cantidad solo acepta numeros enteros, no decimales";
    }


    return '';
}
  
  





