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

function obtenerPromedio(numeros) {
  let acumulador = 0;
  for (let i = 0; i < numeros.length; i++) {
    acumulador += numeros[i];
  }

  return (acumulador / numeros.length).toFixed(2);
}

function obtenerMayorSalario(array){
  let mayorSalario = array[0]
  for (i = 0; i < array.length; i ++){
    if (array[i] > mayorSalario){
      mayorSalario = array[i] 
    }
  }  return mayorSalario;
}

function obtenerMenorSalario(array){
  let menorSalario = array[0]
  for (i = 0; i < array.length; i ++){
    if (array[i] < menorSalario){
      menorSalario = array[i] 
    }
  }  return menorSalario;
}

function obtenerPromedioSalarios(array) {
  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    suma += array[i];
  }

  return (suma / array.length).toFixed(2);
}


function obtenerSalariosMensuales(array){
  let array2 = []
  
    for (i = 0; i < array.length; i++){
    array2.push(Number(array[i] / 12))
  }
  return array2
}

function obtenerPromedioSalariosMensuales(array2){
  let suma2 = 0;
  for (let i = 0; i < array2.length; i++) {
    suma2 += array2[i];
  }

  return (suma2 / array2.length).toFixed(2);
}
