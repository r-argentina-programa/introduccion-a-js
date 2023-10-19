/*
TAREA 2:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
document.querySelector("#add-member").onclick = (event) => {
  addMember();
  console.log("created");

  event.preventDefault();
};

let idCounter = 0;

function addMember() {
  const $div = document.createElement("div");
  const newId = idCounter;
  $div.className = `member${newId}`;
  idCounter += 1;

  const $label = document.createElement("label");
  const $input = document.createElement("input");
  const $button = document.createElement("button");

  $label.textContent = "Member salary";
  $input.type = "number";
  $button.type = "button";
  $button.textContent = "Remove";
  $button.onclick = () => removeMember(newId);

  $div.appendChild($label);
  $div.appendChild($input);
  $div.appendChild($button);

  document.querySelector("#members").appendChild($div);
  showCalculate();
}

function removeMember(id) {
  const $toDelete = document.querySelector(`.member${id}`);
  $toDelete.remove();
  hideResults();
  if (document.querySelector("#members").childElementCount === 0) {
    hideCalculate();
  }
}

document.querySelector("#calculate").onclick = () => {
  const numbers = getNumbers();

  if (numbers.length > 0) {
    showSalary("highest", getHighest(numbers));
    showSalary("lowest", getLowest(numbers));
    showSalary("avarage-anual", getAvarageAnual(numbers));
    showSalary("avarage-monthly", getAvarageMonthly(numbers));

    showResults();
  }
};

function getNumbers() {
  const $numbers = document.querySelectorAll("#members input");
  const numbers = [];

  for (let i = 0; i < $numbers.length; i++) {
    if (Number($numbers[i].value > 0)) {
      numbers.push(Number($numbers[i].value));
    }
  }

  return numbers;
}

function showSalary(id, value) {
  document.querySelector(`#${id}-salary`).textContent = value;
}

function getHighest(numbers) {
  return Math.max(...numbers);
}

function getLowest(numbers) {
  return Math.min(...numbers);
}

function getAvarageAnual(numbers) {
  const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
  return sum / numbers.length;
}
function getAvarageMonthly(numbers) {
  const months = 12;
  return getAvarageAnual(numbers) / months;
}

function showResults() {
  document.querySelector("#results").className = "";
}

function hideResults() {
  document.querySelector("#results").className = "hidden";
}

function showCalculate() {
  document.querySelector("#calculate").className = "";
}
function hideCalculate() {
  document.querySelector("#calculate").className = "hidden";
}
