document.querySelector('#calcular-tiempo-total').onclick = function () {
    const segundosVideo = document.querySelectorAll('.segundos-video');
    let segundosVideosTotales = 0;
    for (let i = 0; i < segundosVideo.length; i++) {
        segundosVideosTotales += Number(segundosVideo[i].value);
    }

    const minutosExtra = Math.floor(segundosVideosTotales / 60);
    const segundosRestantes = segundosVideosTotales % 60;

    const minutosVideo = document.querySelectorAll('.minutos-video');
    let minutosVideosTotales = 0;
    for (let i = 0; i < minutosVideo.length; i++) {
        minutosVideosTotales += Number(minutosVideo[i].value);
    }
    minutosVideosTotales += minutosExtra;
    const horasExtra = Math.floor(minutosVideosTotales / 60);

    const minutosRestantes = minutosVideosTotales % 60;

    const horasVideo = document.querySelectorAll('.horas-video');
    let horasVideoTotales = 0;
    for (let i = 0; i < horasVideo.length; i++) {
        horasVideoTotales += Number(horasVideo[i].value);
    }

    const totalHorasVideo = (horasVideoTotales += horasExtra);

    document.querySelector(
        '.resultado',
    ).innerText = `El tiempo total de todas las clases es:  ${totalHorasVideo}:Horas / ${minutosRestantes}:Minutos  / ${segundosRestantes}:Segundos`;
};

