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
    const label = document.createElement(`label`)
    label.textContent = `Edad`
    $formulario.appendChild(label)
    const input = document.createElement(`input`)
    input.type = `number`
    input.id = `edad-integrante`
    $formulario.appendChild(input)
  }
}

$botonCalcularEdad.onclick = function(){
    const $edadIntegrante = document.querySelectorAll(`#edad-integrante`)
    let guardarEdades = []
    for (i = 0; $edadIntegrante.length; i = i + 1){
        let edades = $edadIntegrante [i]
        const totalEdades = edades.value
        guardarEdades.push(totalEdades)
    }
}
