/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels
para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
function cancelSubmitForm() {
  const $form = document.querySelector("form");
  $form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
}

function setupEventHandlerButtonEnter() {
  const $button = document.querySelector(".form__btn-enter");

  $button.addEventListener("click", () => {
    const numberOfMembers = getFamilyMembers();
    const $buttonCalculate = document.querySelector(".form__btn-calculate");
    const $buttonReset = document.querySelector(".form__btn-reset");
    const $containerResults = document.querySelector(".results");

    if (numberOfMembers > 0) {
      const $contFieldsetsSalaries = document.querySelector(
        ".form__cont-fieldsets-salaries"
      );

      if ($contFieldsetsSalaries.hasChildNodes()) {
        deleteElementContent($contFieldsetsSalaries);
      }

      createAndRenderFieldsetsSalaries(numberOfMembers, $contFieldsetsSalaries);

      $buttonCalculate.className = "form__btn-calculate show";
      $containerResults.className = "results show";
      $buttonReset.className = "form__btn-reset show";
    }
  });
}

function setupEventHandlerButtonCalculate() {
  const $button = document.querySelector(".form__btn-calculate");
  $button.addEventListener("click", () => {
    const salaries = getSalaries();
    renderResults(salaries);
  });
}

function setupEventHandlerButtonReset() {
  const $button = document.querySelector(".form__btn-reset");
  $button.addEventListener("click", () => {
    const $results = document.querySelectorAll("span");
    $results.forEach((i) => {
      deleteElementContent(i);
    });
    reset();
  });
}

function getFamilyMembers() {
  const $members = document.querySelector(".form__input-members");
  return Number($members.value);
}

function getSalaries() {
  const $salaries = document.querySelectorAll(".form__input-salary");
  const salaries = [];
  $salaries.forEach((salary) => {
    if (salary.value != 0) {
      salaries.push(Number(salary.value));
    }
  });
  return salaries;
}

function deleteElementContent($el) {
  $el.textContent = "";
}

function createAndRenderFieldsetsSalaries(numberOfMembers, $container) {
  for (let index = 0; index < numberOfMembers; index++) {
    const $fieldset = document.createElement("fieldset");
    $fieldset.classList.add("form__fieldset-salaries");
    $fieldset.innerHTML = `
        <label>Salario Anual</label>
        <input type="number" class="form__input-salary" />`;
    $container.appendChild($fieldset);
  }
}

function reset() {
  const $results = document.querySelector(".results");
  const $buttonReset = document.querySelector(".form__btn-reset");
  const $buttonCalculate = document.querySelector(".form__btn-calculate");
  const $contFieldsetSalaries = document.querySelector(
    ".form__cont-fieldsets-salaries"
  );

  deleteElementContent($contFieldsetSalaries);
  $results.className = "results hide";
  $buttonReset.className = "form__btn-reset hide";
  $buttonCalculate.className = "form__btn-calculate hide";
}

function renderResults(salariesArray) {
  const higherSalaryAnnual = calculateHigherAnnualSalary(salariesArray);
  const lowerSalaryAnnual = calculateLowerAnnualSalary(salariesArray);
  const averageSalaryAnnual = calculateAverageAnnualSalary(salariesArray);
  const averageSalaryMonthly =
    calculateAverageMonthlySalary(averageSalaryAnnual);

  const $higherSalaryAnnual = document
    .querySelector(".results__higherSalary")
    .querySelector("span");
  const $lowerSalaryAnnual = document
    .querySelector(".results__lowerSalary")
    .querySelector("span");
  const $averageSalaryAnnual = document
    .querySelector(".results__averageAnnualSalary")
    .querySelector("span");
  const $averageSalaryMonthly = document
    .querySelector(".results__averageMonthlySalary")
    .querySelector("span");

  if (salariesArray.length != 0) {
    $higherSalaryAnnual.textContent = "$" + higherSalaryAnnual;
    $higherSalaryAnnual.classList.add("show");

    $lowerSalaryAnnual.textContent = "$" + lowerSalaryAnnual;
    $lowerSalaryAnnual.classList.add("show");

    $averageSalaryAnnual.textContent = "$" + averageSalaryAnnual;
    $averageSalaryAnnual.classList.add("show");

    $averageSalaryMonthly.textContent = "$" + averageSalaryMonthly;
    $averageSalaryMonthly.classList.add("show");
  }
}

function main() {
  cancelSubmitForm();
  setupEventHandlerButtonEnter();
  setupEventHandlerButtonCalculate();
  setupEventHandlerButtonReset();
}
main();
