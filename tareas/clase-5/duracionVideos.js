const $calcular = document.querySelector('#boton').onclick = function(event) {
    obtenerHoras();
    obtenerMinutos();
    obtenerSegundos();

    event.preventDefault();
}

function obtenerHoras() {
    const $horas = document.querySelectorAll('.horas');
    let hora = 0;
    for (let i = 0; i < $horas.length; i++) {
        hora += Number($horas[i].value);
    };
    console.log(hora);
    mostrarResultadoHora(`Horas totales ${hora}`);
};

function obtenerMinutos() {
    const $minutos = document.querySelectorAll('.minutos');
    let minuto = 0;
    for (let i = 0; i < $minutos.length; i++) {
        minuto += Number($minutos[i].value);
    };
    console.log(minuto);
    transformarMinutos(minuto);
    mostrarResultadoMinuto(`Minutos totales ${minuto}`);
};

function obtenerSegundos() {
    const $segundos = document.querySelectorAll('.segundos');
    let segundo = 0;
    for (let i = 0; i < $segundos.length; i++) {
        segundo += Number($segundos[i].value);
    };
    console.log(segundo);
    transformarSegundos(segundo);
    mostrarResultadoSegundo(`Segundos totales ${segundo}`);
};

function transformarSegundos(segundo) {
    let resultado = 0;
    if ((segundo / 60) > 0) {
        resultado = ((segundo / 60).toFixed());
    };
    console.log(`Horas totales ${resultado}`);
};

function transformarMinutos(minuto) {


    let resultado = 0;
    if ((minuto / 60) > 0) {
        resultado = ((minuto / 60).toFixed());
    };

    console.log(`Minutos totales ${resultado}`);
};

function mostrarResultadoHora(hora) {
    document.querySelector('#resultado').className = "";
    document.querySelector('#titulo-resultado').className = "";
    document.querySelector('#resultado-horas').textContent = hora;
};

function mostrarResultadoMinuto(minuto) {
    document.querySelector('#resultado').className = "";
    document.querySelector('#titulo-resultado').className = "";
    document.querySelector('#resultado-minutos').textContent = minuto;
};

function mostrarResultadoSegundo(segundo) {
    document.querySelector('#resultado').className = "";
    document.querySelector('#titulo-resultado').className = "";
    document.querySelector('#resultado-segundos').textContent = segundo;
};


const $resetear = document.querySelector('#reset').onclick = function() {
    document.querySelector('#resultado').className = "oculto";
    document.querySelector('#titulo-resultado').className = "oculto";
};