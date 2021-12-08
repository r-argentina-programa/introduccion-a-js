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

  
  document.querySelector("#enviar").onclick = function(event){

    
    const nombre = document.querySelector("#nombre")
    const segundoNombre = document.querySelector("#segundo-nombre")
    const edad = document.querySelector ("#edad")

    document.querySelector("#mostrarNombre").textContent = nombre.value
    document.querySelector("#mostrarSegundoNombre").textContent = segundoNombre.value
    document.querySelector("#mostrarEdad").textContent = edad.value
    document.querySelector("#saludar-usuario").textContent = ("Bienvenido " + nombre.value)


   
    mostrarElemento("#placeholder")
    return false
}

function mostrarElemento(elemento){
    document.querySelector(elemento).className = ""
}

