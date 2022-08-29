document.querySelector('#calcular-tiempo-total').onclick = function () {
    const horasVideo = document.querySelectorAll('.horas-video');
    let horasVideoTotales = 0;
    for (let i = 0; i < horasVideo.length; i++) {
        horasVideoTotales += Number(horasVideo[i].value);
    }

    console.log(horasVideoTotales);
    const minutosVideo = document.querySelectorAll('.minutos-video');
    let minutosVideosTotales = 0;
    for (let i = 0; i < minutosVideo.length; i++) {
        minutosVideosTotales += Number(minutosVideo[i].value);
    }
    horasVideoTotales = Math.floor(minutosVideosTotales / 60) + horasVideoTotales;
    minutosVideosTotales = minutosVideosTotales % 60;
    console.log(minutosVideosTotales);
    const segundosVideo = document.querySelectorAll('.segundos-video');
    let segundosVideosTotales = 0;
    for (let i = 0; i < segundosVideo.length; i++) {
        segundosVideosTotales += Number(segundosVideo[i].value);
    }
    minutosVideosTotales = Math.floor(segundosVideosTotales / 60) + minutosVideosTotales;
    segundosVideosTotales = segundosVideosTotales % 60;
    console.log(segundosVideosTotales);

    document.querySelector(
        '.resultado',
    ).innerText = `El tiempo total de todas las clases es: Horas:${horasVideoTotales} Minutos: ${minutosVideosTotales} Segundos: ${segundosVideosTotales}`;
};
