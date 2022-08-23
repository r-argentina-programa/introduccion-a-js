document.querySelector('#calcular-tiempo-total').onclick = function () {
    const horasVideo = Number(document.querySelector('#horas-video').value);
    const minutosVideo = Number(document.querySelector('#minutos-video').value);
    const segundosVideo = Number(document.querySelector('#segundos-video').value);

    const tiempoTotalVideo = calcularTiempoTotalClases(horasVideo, minutosVideo, segundosVideo);

    document.querySelector('#resultado').value = tiempoTotalVideo;

    return false;
};

function calcularTiempoTotalClases(horasVideo, minutosVideo, segundosVideo) {
    const tiempoTotalClase = `${horasVideo}:${minutosVideo}: ${segundosVideo}`;
    return tiempoTotalClase;
}
