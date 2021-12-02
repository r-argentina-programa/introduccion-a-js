document.querySelector("#calcular-salario-mensual").onclick = function(){
  const  $salarioAnual = Number(document.querySelector("#salario-anual").value)
  const salarioMensual = calcularSalarioMensual($salarioAnual)
  document.querySelector("#salario-mensual").value = salarioMensual
  mostrarSalarioMensual()

  return false
  }

  function calcularSalarioMensual(salarioanual){
    mesesEnUnAnio = 12
    return salarioanual / mesesEnUnAnio
  }

  function mostrarSalarioMensual(){
    document.querySelector("#salario-mensual").className = ""
  }

  
