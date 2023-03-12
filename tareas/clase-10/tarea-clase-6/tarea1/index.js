/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.
Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

function setupEventHandlerButtonEnter() {
  const $button = document.querySelector(".form__btn-enter");
  $button.addEventListener("click", () => {
    const numberOfFamilyMembers = getNumberOfFamilyMembers();
    const $contFieldsets = document.querySelector(".form__cont-fieldsets-ages");

    if ($contFieldsets.hasChildNodes()) {
      deleteContent($contFieldsets);
    }

    createAndRenderFieldsetsAges(numberOfFamilyMembers, $contFieldsets);
  });
}

function setupEventHandlerButtonCalculate() {
  const $button = document.querySelector(".form__btn-calculate");
  $button.addEventListener("click", () => {
    const ages = getAges();
    const agesValidation = validateAges(ages);

    if (agesValidation != 0) {
      const greatestAge = calculateGreatestAge(ages);
      const lowestAge = calculateLowestAge(ages);
      const averageAges = calculateAverageOfAges(ages);
      const $containerResults = document.querySelector(".results");

      if ($containerResults.hasChildNodes()) {
        deleteContent($containerResults);
      }

      createAndRenderResultParagraph(
        $containerResults,
        `La mayor edad es de: ${greatestAge}`
      );

      createAndRenderResultParagraph(
        $containerResults,
        `La menor edad es de: ${lowestAge}`
      );

      createAndRenderResultParagraph(
        $containerResults,
        `El promedio de edad es de: ${averageAges}`
      );
    }
  });
}

function setupEventHandlerButtonReset() {
  const $button = document.querySelector(".form__btn-reset");

  $button.addEventListener("click", () => {
    const $contFieldsetsAges = document.querySelector(
      ".form__cont-fieldsets-ages"
    );
    const $containerResults = document.querySelector(".results");
    const $numberMembers = document.querySelector(".form__input-members");

    $numberMembers.value = "";
    deleteContent($contFieldsetsAges);
    deleteContent($containerResults);
  });
}

function getNumberOfFamilyMembers() {
  const numbersOfMembers = document.querySelector(".form__input-members");
  return Number(numbersOfMembers.value);
}

function getAges() {
  const $ages = document.querySelectorAll(".form__input-age");
  let ages = [];

  $ages.forEach(($age) => {
    const age = Number($age.value);
    ages.push(age);
  });
  return ages;
}

function deleteContent($container) {
  $container.textContent = "";
}

function createAndRenderFieldsetsAges(numFieldsets, $container) {
  for (let index = 0; index < numFieldsets; index++) {
    const $fieldset = document.createElement("fieldset");
    $fieldset.classList.add("form__fieldset-age");

    const $label = document.createElement("label");
    $label.textContent = "Edad";
    $label.classList.add("form__label-age");

    const $input = document.createElement("input");
    $input.classList.add("form__input-age");

    $fieldset.appendChild($label);
    $fieldset.appendChild($input);
    $container.appendChild($fieldset);
  }
}

function createAndRenderResultParagraph($container, textContent) {
  const $paragraph = document.createElement("p");
  $paragraph.textContent = textContent;
  $container.appendChild($paragraph);
}

function cancelSubmitForm() {
  const $form = document.querySelector(".form");
  $form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
}

function main() {
  cancelSubmitForm();

  setupEventHandlerButtonEnter();
  setupEventHandlerButtonCalculate();
  setupEventHandlerButtonReset();
}
main();
