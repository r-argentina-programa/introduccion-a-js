const $botonAgregarMiembros = document.querySelector(`#agregar-miembro`);
const $botonCalcularEdad = document.querySelector(`#calcular-edad`);

$botonAgregarMiembros.onclick = function () {
  const numeroMiembros = Number(
    document.querySelector(`#miembros-familia`).value
  );
  if (numeroMiembros > 0) {
    agregarMiembro(numeroMiembros);
  } else {
    alert("El valor 0 no es valido.");
  }

  return false;
};

function agregarMiembro(numeroMiembros) {
  const $formulario = document.querySelector(`#formulario`);
  for (i = 1; i <= numeroMiembros; i = i + 1) {
    const label = document.createElement(`label`);
    label.textContent = `Edad`;
    $formulario.appendChild(label);
    const input = document.createElement(`input`);
    input.type = `number`;
    input.id = `edad-integrante`;
    $formulario.appendChild(input);
  }
}

$botonCalcularEdad.onclick = function () {
  const $edadIntegrante = document.querySelectorAll(`#edad-integrante`);
  let edadIntegrante = [];
  for (i = 0; i < $edadIntegrante.length; i = i + 1) {
    let nodos = $edadIntegrante[i];
    const edades = Number(nodos.value);
    edadIntegrante.push(edades);
  }
  const $mayorEdad = document.querySelector(`#mayor-edad`);
  $mayorEdad.textContent = `${edadMayor(edadIntegrante)}`;
  const $menorEdad = document.querySelector(`#menor-edad`);
  $menorEdad.textContent = `${edadMenor(edadIntegrante)}`;
  const $promedioEdad = document.querySelector(`#promedio-edad`);
  $promedioEdad.textContent = `${edadPromedio(edadIntegrante)}`;
};

function edadPromedio(edadIntegrante) {
  let resultado = 0;
  for (i = 0; i < edadIntegrante.length; i = i + 1) {
    resultado = resultado + edadIntegrante[i];
  }
  return resultado / edadIntegrante.length;
}

function edadMayor(edadIntegrante) {
  let resultadoMayor = edadIntegrante[0];
  for (i = 0; i < edadIntegrante.length; i = i + 1) {
    if (edadIntegrante[i] > resultadoMayor) {
      resultadoMayor = edadIntegrante[i];
    }
  }
  return resultadoMayor;
}

function edadMenor(edadIntegrante) {
  let resultadoMenor = edadIntegrante[0];
  for (i = 0; i < edadIntegrante.length; i = i + 1) {
    if (edadIntegrante[i] < resultadoMenor) {
      resultadoMenor = edadIntegrante[i];
    }
  }
  return resultadoMenor;
}
