function mayorSalarioAnual(){
    const sueldos = document.querySelectorAll('.miembros');
    let maxSalario = 0;
  
    for(let i = 0; i < sueldos.length; i++){
      if (Number(sueldos[i].value) != 0  && Number(sueldos[i].value) > maxSalario ){
          maxSalario = Number(sueldos[i].value);
      }
    }
  
    return maxSalario;
  }

function menorSalarioAnual(){
    const sueldos = document.querySelectorAll('.miembros');
    let minSalario = 1000000;

    for(let i = 0; i < sueldos.length; i++){
        if (Number(sueldos[i].value) != 0  && Number(sueldos[i].value) < minSalario ){
            minSalario = Number(sueldos[i].value);
        }
      }
    
      return minSalario; 
  }

function salarioAnualPromedio(cantidadMiembros){
  const sueldos = document.querySelectorAll('.miembros');
  let salarioPromedio = 0;
  let sumatoriaSalarios = 0;

  for (let i = 0; i < sueldos.length; i++) {
    sumatoriaSalarios += Number(sueldos[i].value);
    
  }
  
  salarioPromedio = (sumatoriaSalarios / cantidadMiembros);

  return salarioPromedio;
}

function salarioMensualPromedio(){
  
  //const sueldos = document.querySelector('.miembros');
  const mesesDelAnio = 12;
  let salarioPromedioMensual = 0;
  //let sumatoriaSalarios = 0;

  /*for (let i = 0; i < sueldos.length; i++) {
     = sueldos[i];
    
  }*/
  salarioPromedioMensual = (salarioAnualPromedio(cantidadMiembros) / mesesDelAnio);

  return salarioPromedioMensual;
}