function probarValidarSalarioAnualUsuario() {
  console.assert(
    validarSalarioAnualUsuario("") ===
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
    calcularSalarioMensual(12, 12) === 1,
    "El calculo de la funcion calcularSalarioMensual no dio 1"
  );
}

probarValidarSalarioAnualUsuario();
probarValidarFuncionCalcularSalarioMensual();
