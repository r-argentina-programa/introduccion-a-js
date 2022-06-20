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
  
  function obtenerMayorSalario(salarios) {
    let mayorSalario = salarios[0];
    for (let i = 1; i < salarios.length; i++) {
      if (salarios[i] !== '') {
        if (salarios[i] > mayorSalario) {
          mayorSalario = salarios[i];
        }
      }
    }
    return mayorSalario;
}
  
  function obtenerMenorSalario(salarios) {
    let menorSalario = salarios[0];
    for (let i = 1; i < salarios.length; i++) {
      if (salarios[i] !== '') {
        if (salarios[i] < menorSalario) {
          menorSalario = salarios[i];
        }
      }
    }
    return menorSalario;
}
  
  function obtenerSalarioPromedio(salarios) {
    let acumulador = 0;
    for (let i = 0; i < salarios.length; i++) {
      if (salarios[i] !== '') {
        acumulador += salarios[i];
      }
    }
  
    return (acumulador / salarios.length).toFixed(2);
}
  
  function obtenerSalarioPromedioMensual(salarios) {
    let acumulador = 0;
    const mesesEnElAnio = 12;
    for (let i = 0; i < salarios.length; i++) {
      if (salarios[i] !== '') {
        acumulador += salarios[i];
      }
    }
    return ((acumulador / salarios.length)/mesesEnElAnio).toFixed(2);
}

// Por ahi me conviene hacer el filtro al armar el array, no durante el calculo.
  