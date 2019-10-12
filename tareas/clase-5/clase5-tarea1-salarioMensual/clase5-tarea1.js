
//Aca abajo crear la funcion principal del programa
function calcularSalarioMensual(salarioAnual){
    return salarioAnual / 12;
  }
  
  //Aca abajo crea la variable del boton a la cual despues le asignamos el onclick
  const $calcularSalarioMensual = document.querySelector("#calculo-salario-mensual")
  
  $calcularSalarioMensual.onclick = function () {
    const salarioAnual = Number(document.querySelector("#salario-anual").value);
    const salarioMensual = calcularSalarioMensual(salarioAnual);
    document.querySelector("#salario-mensual").value = salarioMensual;
    
    return false;
  }

  
  