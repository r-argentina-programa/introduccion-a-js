const calcularTiempoTotalClases = (document.querySelector('#calcular-tiempo-total').onclick = function () {
	const segundosDeCadaVideo = document.querySelectorAll('.segundos-video');
	let segundosVideosTotales = 0;
	for (let i = 0; i < segundosVideo.length; i++) {
		segundosVideosTotales += Number(segundosDeCadaVideo[i].value);
	}

	const minutosExtra = Math.floor(segundosVideosTotales / 60);
	const segundosRestantes = segundosVideosTotales % 60;

	const minutosDeCadaVideo = document.querySelectorAll('.minutos-video');
	let minutosVideosTotales = 0;
	for (let i = 0; i < minutosVideo.length; i++) {
		minutosVideosTotales += Number(minutosDeCadaVideo[i].value);
	}
	minutosVideosTotales += minutosExtra;
	const horasExtra = Math.floor(minutosVideosTotales / 60);

	const minutosRestantes = minutosVideosTotales % 60;

	const horasDeCadaVideo = document.querySelectorAll('.horas-video');
	let horasVideoTotales = 0;
	for (let i = 0; i < horasVideo.length; i++) {
		horasVideoTotales += Number(horasDeCadaVideo[i].value);
	}

	const totalHorasVideo = horasVideoTotales + horasExtra;

	document.querySelector(
		'.resultado',
	).innerText = `El tiempo total de todas las clases es:  ${totalHorasVideo}:Horas / ${minutosRestantes}:Minutos  / ${segundosRestantes}:Segundos`;
});
