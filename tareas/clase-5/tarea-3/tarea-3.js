document.querySelector('#calcular-tiempo-total').onclick = function () {
    const horasVideo = document.querySelectorAll('.clase .horas-video');
    const minutosVideo = document.querySelectorAll('.clase .minutos-video');
    const segundosVideo = document.querySelectorAll('.clase .segundos-video');
    const tiempoTotal = devolverTiempoVideo(horasVideo,minutosVideo,segundosVideo)
    document.querySelector(".resultado").values = tiempoTotal

    for (let i = 0; i < horasVideo.length; i++) {
        console.log(horasVideo[i].value);
    }
    for (let i = 0; i < minutosVideo.length; i++) {
        console.log(minutosVideo[i].value);
    }
    for (let i = 0; i < segundosVideo.length; i++) {
        console.log(segundosVideo[i].value);
    }
};

function devolverTiempoVideo(horasVideo, minutosVideo, segundosVideo) {
    const tiempoVideo = `${horasVideo}:${minutosVideo}:${segundosVideo}`;
    return tiempoVideo;
}
