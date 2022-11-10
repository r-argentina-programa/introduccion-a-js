function probarValidarSalarioAnualUsuario() {
  console.assert(
    validarSalarioAnualUsuario(0) ===
      "El campo Salario Anual no puede estar vacio",
    "validar salario anual usuario no valido que el campo sea vacio"
  );

  console.assert(
    validarSalarioAnualUsuario("askdlnhafhowqiwoqrwqhdbio") ===
      "El campo Salario Anual solo acepta numeros",
    "validar salario anual usuario no valido que el campo solo acepte numeros"
  );
  console.assert(
    validarSalarioAnualUsuario("10000000") === "",
    "validar salario anual usuario fallo con un salario valido"
  );
}

function probarValidarFuncionCalcularSalarioMensual() {
  console.assert(
    validarFuncionCalcularSalarioMensual(0) ===
      "No se puede obtener el resultado, si no ingresa un valor en el campo salario Anual",
    "la funcion calcular salario mensual no valido que el campo este en 0"
  );
  console.assert(
    validarFuncionCalcularSalarioMensual("48963") === "",
    "la funcion validar fallo con un resultado valido"
  );
}

probarValidarSalarioAnualUsuario();
probarValidarFuncionCalcularSalarioMensual();
