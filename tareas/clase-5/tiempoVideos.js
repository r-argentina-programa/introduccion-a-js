function convertirASegundos(horas, minutos, segundos) {
    return (3600 * horas + 60 * minutos + segundos)
}

function convertirAHoras(cantidadSegundos) {

    let segundos = cantidadSegundos;

    const horas = Math.floor(segundos / 3600);
    segundos = segundos % 3600;
    const minutos = Math.floor(segundos / 60);
    segundos = segundos % 60;

    return [horas, minutos, segundos];
}




const botonAgregarVideo = document.querySelector("#boton-agregar-tiempo-video");
const duracionesVideos = []


botonAgregarVideo.onclick = function () {

    const horasVideo = parseInt(document.querySelector("#horas").value, 10);
    const minutosVideo = parseInt(document.querySelector("#minutos").value, 10);
    const segundosVideo = parseInt(document.querySelector("#segundos").value, 10);

    duracionesVideos.push(convertirASegundos(horasVideo, minutosVideo, segundosVideo));

    return false;
}


const botonCalcularTotal = document.querySelector("#boton-calcular-total");

botonCalcularTotal.onclick = function () {

    let resultado = 0;

    for (i = 0; i < duracionesVideos.length; i++) {

        resultado += duracionesVideos[i];

    }
    resultado = convertirAHoras(resultado);

    document.querySelector("#resultado").value = `${resultado[0]} horas, ${resultado[1]} minutos, ${resultado[2]} segundos.`


    return false;
}
