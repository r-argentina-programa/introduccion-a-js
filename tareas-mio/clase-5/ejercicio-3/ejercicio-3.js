//TAREA: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

const $botonCalcular = document.querySelector('#calcular');

$botonCalcular.onclick = function () {
  const horas = document.querySelectorAll('.horas');
  let horasTotales = 0;
  for (let i = 0; i < horas.length; i++) {
    horasTotales = horasTotales + Number(horas[i].value);
  }

  const minutos = document.querySelectorAll('.minutos');
  let minutosTotales = 0;
  for (let i = 0; i < minutos.length; i++) {
    minutosTotales = minutosTotales + Number(minutos[i].value);

    if (minutosTotales >= 60) {
      horasTotales++;
      minutosTotales = minutosTotales - 60;
    }
  }

  const segundos = document.querySelectorAll('.segundos');
  let segundosTotales = 0;
  for (let i = 0; i < minutos.length; i++) {
    segundosTotales = segundosTotales + Number(segundos[i].value);

    if (segundosTotales >= 60) {
      minutosTotales++;
      segundosTotales = segundosTotales - 60;
    }
  }

  document.querySelector('strong').textContent =
    horasTotales + ' horas ' + minutosTotales + ' minutos ' + segundosTotales + ' segundos.';

  return false;
};
