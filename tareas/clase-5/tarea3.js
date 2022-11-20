//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

function getHours() {
  const hoursEl = document.querySelectorAll(".form__hour");
  const hoursToReturn = [];

  for (let index = 0; index < hoursEl.length; index++) {
    const hourValue = hoursEl[index].value;
    hoursToReturn.push(hourValue);
  }
  return hoursToReturn;
}

function getMinutes() {
  const minutesEl = document.querySelectorAll(".form__minute");
  const minutesToReturn = [];

  for (let index = 0; index < minutesEl.length; index++) {
    const minuteValue = minutesEl[index].value;
    minutesToReturn.push(minuteValue);
  }
  return minutesToReturn;
}

function getSeconds() {
  const secondsEl = document.querySelectorAll(".form__second");
  const secondsToReturn = [];

  for (let index = 0; index < secondsEl.length; index++) {
    const secondsValue = secondsEl[index].value;
    secondsToReturn.push(secondsValue);
  }
  return secondsToReturn;
}

(function main() {
  const contentEl = document.querySelector(".content");
  const formEl = document.querySelector(".form");
  const totalTimeEl = document.createElement("strong");
  totalTimeEl.classList.add("total-time");

  formEl.addEventListener("submit", (e) => {
    totalTimeEl.textContent = 0;
    e.preventDefault();
    const hours = getHours();
    const minutes = getMinutes();
    const seconds = getSeconds();
    let totalHours = 0;
    let totalMinutes = 0;
    let totalSeconds = 0;

    for (let index = 0; index < hours.length; index++) {
      const hour = Number(hours[index]);
      const minute = Number(minutes[index]);
      const second = Number(seconds[index]);
      totalHours = totalHours + hour;
      totalMinutes = totalMinutes + minute;
      totalSeconds = totalSeconds + second;
    }

    totalTimeEl.textContent =
      totalHours +
      " horas, " +
      totalMinutes +
      " minutos, " +
      totalSeconds +
      " segundos.";
    contentEl.appendChild(totalTimeEl);
  });
})();
