function obtenerSalarioMayor(salariosIntegrantes) {
  let salarioMayor = salariosIntegrantes[0];
  for (let i = 0; i < salariosIntegrantes.length; i++) {
    if (salariosIntegrantes[i] > salarioMayor) {
      salarioMayor = salariosIntegrantes[i];
    }
  }
  return salarioMayor;
}

function obtenerSalarioMenor(salariosIntegrantes) {
  let salarioMenor = salariosIntegrantes[0];
  for (let i = 0; i < salariosIntegrantes.length; i++) {
    if (salariosIntegrantes[i] < salarioMenor) {
      salarioMenor = salariosIntegrantes[i];
    }
  }
  return salarioMenor;
}

function calcularSalarioAnualPromedio(salariosIntegrantes) {
  let resultado = 0;
  for (let i = 0; i < salariosIntegrantes.length; i++) {
    resultado = resultado + salariosIntegrantes[i];
  }
  return resultado / salariosIntegrantes.length;
}
