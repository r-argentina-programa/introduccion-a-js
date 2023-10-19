/*
TAREA 1: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

document.querySelector("#generate-members").onclick = (event) => {
  const $membersAmount = document.querySelector("#members-amount");
  const membersAmount = Number($membersAmount.value);

  deletePreviousMembers();
  hideResults();
  createMembers(membersAmount);

  event.preventDefault();
};

document.querySelector("#calculate").onclick = (event) => {
  const numbers = getMembersAge();
  showAge("oldest", getOldest(numbers));
  showAge("youngest", getYoungest(numbers));
  showAge("avarage", getAvarage(numbers));

  showResults();
};

document.querySelector("#reset").onclick = reset;

function deletePreviousMembers() {
  const $toDelete = document.querySelectorAll(".member");
  for (let entry of $toDelete) {
    entry.remove();
  }
}

function createMembers(amount) {
  if (amount) {
    for (let i = 0; i < amount; i++) {
      createMember(i);
    }
    showButton("#calculate");
    showButton("#reset");
  } else {
    reset();
  }
}

function createMember(index) {
  const $div = document.createElement("div");
  $div.className = "member";

  const $label = document.createElement("label");
  const $input = document.createElement("input");

  $label.textContent = `Family member #${index + 1} age`;
  $input.className = "member-age";
  $input.type = "number";

  $div.appendChild($label);
  $div.appendChild($input);

  document.querySelector("#members").appendChild($div);
}

function showButton(id) {
  document.querySelector(`${id}`).className = "";
}

function hideButton(id) {
  document.querySelector(`${id}`).className = "hidden";
}

function getMembersAge() {
  const $membersAge = document.querySelectorAll(".member-age");
  const membersAge = [];
  for (let i = 0; i < $membersAge.length; i++) {
    membersAge.push(Number($membersAge[i].value));
  }
  return membersAge;
}

function showAge(id, value) {
  document.querySelector(`#${id}-age`).textContent = value;
}

function getOldest(numbers) {
  return Math.max(...numbers);
}

function getYoungest(numbers) {
  return Math.min(...numbers);
}

function getAvarage(numbers) {
  const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
  return sum / numbers.length;
}

function showResults() {
  document.querySelector("#results").className = "";
}

function hideResults() {
  document.querySelector("#results").className = "hidden";
}

function reset() {
  hideResults();
  hideButton("#calculate");
  hideButton("#reset");
  deletePreviousMembers();
}

