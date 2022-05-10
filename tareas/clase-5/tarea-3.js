const $botonCalcular = document.querySelector('#calcular');

$botonCalcular.onclick = function(){
    const horClase1 = Number(document.querySelector('#hor-clase-1').value);
    const minClase1 = Number(document.querySelector('#min-clase-1').value);
    const segClase1 = Number(document.querySelector('#seg-clase-1').value);
    
    const horClase2 = Number(document.querySelector('#hor-clase-2').value);
    const minClase2 = Number(document.querySelector('#min-clase-2').value);
    const segClase2 = Number(document.querySelector('#seg-clase-2').value);

    let horTotal = horClase1 + horClase2;
    let minTotal = minClase1 + minClase2;
    let segTotal = segClase1 + segClase2;

    while(segTotal >= 60){
        segTotal = segTotal - 60;
        minTotal = minTotal + 1;
        if(minTotal >= 60){
            minTotal = minTotal - 60;
            horTotal = horTotal + 1;
        }
    }

    document.querySelector('#hor-total').value = horTotal;
    document.querySelector('#min-total').value = minTotal;
    document.querySelector('#seg-total').value = segTotal;

    return false;
}
