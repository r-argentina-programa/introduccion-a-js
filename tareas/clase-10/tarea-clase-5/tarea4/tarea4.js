//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

function createFieldset() {
  const $fieldset = document.createElement("fieldset");
  $fieldset.classList.add("form__fieldset");
  $fieldset.innerHTML = `
      <label>Horas</label>
      <input class="form__hours" type="number" />
  
      <label>Minutos</label>
      <input class="form__minutes" type="number" />
  
      <label>Segundos</label>
      <input class="form__seconds" type="number" />`;
  return $fieldset;
}

function renderFieldsets() {
  const viewedVideos = Number(prompt("Cuantos videos viste?"));
  const $contFieldsets = document.querySelector(".form__cont-fieldsets");

  for (let index = 0; index < viewedVideos; index++) {
    const $fieldset = createFieldset();
    $contFieldsets.appendChild($fieldset);
  }
}

(function main() {
  renderFieldsets();
  const $form = document.querySelector(".form");
  const $hours = document.querySelectorAll(".form__hours");
  const $minutes = document.querySelectorAll(".form__minutes");
  const $seconds = document.querySelectorAll(".form__seconds");
  const $totalTime = document.querySelector(".form__time");

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    let totalHours = 0;
    let totalMinutes = 0;
    let totalSeconds = 0;

    $hours.forEach((item, index) => {
      const hour = Number(item.value);
      const minute = Number($minutes[index].value);
      const second = Number($seconds[index].value);

      totalSeconds = second + totalSeconds;
      totalMinutes = minute + totalMinutes;
      totalHours = hour + totalHours;
    });

    if (totalSeconds > 60) {
      totalMinutes = totalMinutes + Math.floor(totalSeconds / 60);
      totalSeconds = totalSeconds - Math.floor(totalSeconds / 60) * 60;
    }
    if (totalMinutes > 60) {
      totalHours = totalHours + Math.floor(totalMinutes / 60);
      totalMinutes = totalMinutes - Math.floor(totalMinutes / 60) * 60;
    }

    $totalTime.textContent = `Tiempo total: ${totalHours}h ${totalMinutes}m ${totalSeconds}s`;
  });
})();
