document.querySelector("#boton-calcular").onclick = function () {
    const horas = document.querySelectorAll(".horas");
    console.log(horas)
    let horasTotales = 0;
    for (let i = 0; i < horas.length; i++) {
      horasTotales += Number(horas[i].value);
    }
    const minutos = document.querySelectorAll(".minutos");
    let minutosTotales = 0;
    for (let i = 0; i < minutos.length; i++) {
      minutosTotales += Number(minutos[i].value);
    }
    const segundos = document.querySelectorAll(".segundos");
    let segundosTotales = 0;
    for (let i = 0; i < segundos.length; i++) {
      segundosTotales += Number(segundos[i].value);
    }
    if (segundosTotales / 60 >= 1) {
      minutosTotales += parseInt(segundosTotales / 60);
      segundosTotales = segundosTotales % 60;
    }
    if (minutosTotales / 60 >= 1) {
      horasTotales += parseInt(minutosTotales / 60);
      minutosTotales = minutosTotales % 60;
    }
    document.querySelector(
      "#resultado"
    ).innerHTML = `Tiempo total: ${horasTotales} horas, ${minutosTotales} minutos, ${segundosTotales} segundos`;
  };