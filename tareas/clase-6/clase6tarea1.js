const $botonAgregarMiembros = document.querySelector("#agregar-miembro");
const $botonCalcularEdad = document.querySelector("#calcular-edad");
const $botonRemover = document.querySelector("#remover");

$botonAgregarMiembros.onclick = function () {
  const Miembros = Number(
    document.querySelector(`#miembros-familia`).value
  );
  if (Miembros > 0) {
    agregarMiembro(Miembros);
  } else {
    alert("El valor 0 no es valido.");
  }

  return false;
};

function agregarMiembro(numeroMiembros) {
  const $formulario = document.querySelector("#formulario");
  for (let i = 1; i <= numeroMiembros; i = i + 1) {
    const label = document.createElement("label");
    label.textContent = "Edad";
    $formulario.appendChild(label);
    const input = document.createElement("input");
    input.type = "number";
    input.id = "edad-integrante";
    $formulario.appendChild(input);
  }
}

function limpiarInput(numeroMiembros) {
  for (let i = 0; i < numeroMiembros.length; i = i + 1) {
    numeroMiembros[i].value = "";
  }
}

$botonRemover.onclick = function () {
  const $label = document.querySelectorAll(`#formulario`);
  const $input = document.querySelectorAll(`#edad-integrante`);

  $label[$label.length - 1].remove();
  $input[$input.length - 1].remove();
  limpiarInput($input);
  return false;
};

$botonCalcularEdad.onclick = function () {
  const $edades = document.querySelectorAll(`#edad-integrante`);
  let edadIntegrante = [];
  for (let i = 0; i < $edades.length; i = i + 1) {
    const edades= Number($edades[i].value);
    edadIntegrante.push(edades);
  }
  const $mayorEdad = document.querySelector(`#mayor-edad`);
  $mayorEdad.textContent = `${calcularEdadMayor(edadIntegrante)}`;
  const $menorEdad = document.querySelector(`#menor-edad`);
  $menorEdad.textContent = `${calcularEdadMenor(edadIntegrante)}`;
  const $promedioEdad = document.querySelector(`#promedio-edad`);
  $promedioEdad.textContent = `${calcularEdadPromedio(edadIntegrante)}`;
};

function calcularEdadPromedio(edadIntegrante) {
  let resultado = 0;
  for (let i = 0; i < edadIntegrante.length; i = i + 1) {
    resultado = resultado + edadIntegrante[i];
  }
  return resultado / edadIntegrante.length;
}

function calcularEdadMayor(edadIntegrante) {
  let resultadoMayor = edadIntegrante[0];
  for (let i = 0; i < edadIntegrante.length; i = i + 1) {
    if (edadIntegrante[i] > resultadoMayor) {
      resultadoMayor = edadIntegrante[i];
    }
  }
  return resultadoMayor;
}

function calcularEdadMenor(edadIntegrante) {
  let resultadoMenor = edadIntegrante[0];
  for (let i = 0; i < edadIntegrante.length; i = i + 1) {
    if (edadIntegrante[i] < resultadoMenor) {
      resultadoMenor = edadIntegrante[i];
    }
  }
  return resultadoMenor;
}
