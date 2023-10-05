//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const $calculateTotalTime = document.querySelector("#calculate-total-time");

$calculateTotalTime.onclick = () => {
  const totalHours = addNumbers(getNumbersFromSelector("#hours"));
  const totalMinutes = addNumbers(getNumbersFromSelector("#minutes"));
  const totalSeconds = addNumbers(getNumbersFromSelector("#seconds"));

  document.querySelector(
    "#result"
  ).innerText = `El tiempo total de los videos es ${totalHours} horas, ${totalMinutes} minutos y ${totalSeconds} segundos.`;
};

function getNumbersFromSelector(selector) {
  const inputs = document.querySelectorAll(selector);
  const numbers = [];
  for (let i = 0; i < inputs.length; i++) {
    numbers.push(Number(inputs[i].value));
  }
  return numbers;
}

function addNumbers(numbers) {
  return numbers.reduce((accumulator, currentValue) => { return accumulator + currentValue; });
}
