function calcularPromedio(array){
  let suma = 0;
  for(let i=0;i<array.length;i++){
      suma = suma + array[i];
  }
  return `El promedio es ${suma/array.length}!`;
}

function buscarNumeroMasPequeño(array){
  let menor = array[0];
  for(let i=1;i<array.length;i++){
      if(array[i]<menor){
          menor = array[i];
      }
  }
  return `El numero mas pequeño es ${menor}!`;
}

function buscarNumeroMasGrande(array){
  let mayor = array[0];
  for(let i=1;i<array.length;i++){
      if(array[i]>mayor){
          mayor = array[i];
      }
  }
  return `El numero mas grande es ${mayor}!`;
}


function buscarNumeroMasFrecuente(array){

  let masFrecuente;
  let contador = 0;
  let auxMasFrecuente;
  let auxContador;

  for(let i=0;i<array.length;i++){

      auxContador = 0;
      
      for(let j=0;j<array.length;j++){

          if(array[j]===array[i]){
              auxMasFrecuente = array[j];
              auxContador++;
          }

      }

      if(auxContador>contador){
          masFrecuente = auxMasFrecuente;
          contador = auxContador;
      }

  }    

  return `El numero mas frecuente es ${masFrecuente} repitiendose un total de ${contador} veces!`

}


let $botonCargar = document.querySelector("#cargar");
let $botonCalcular = document.querySelector("#calcular");

let numeros = [];//array vacio en donde voy a ingresar los numeros.

$botonCargar.onclick = function(){

  let $numero = Number(document.querySelector("#ingresar-numero").value);//Guardo el input del usuario.
  numeros.push($numero);//Cargo al array con los numeros ingresados por el usuario.
  
  let nodoPagina = document.querySelector("ol");

  let nuevoItem = document.createElement("li");

  let nuevoNumero = document.createTextNode(`${$numero}`);

  nuevoItem.appendChild(nuevoNumero);
  nodoPagina.appendChild(nuevoItem);

  $botonCalcular.onclick = function(){

      let nodoPagina = document.querySelector("em");

      let nuevoParrafo1 = document.createElement("p");
      let nuevoParrafo2 = document.createElement("p");
      let nuevoParrafo3 = document.createElement("p");
      let nuevoParrafo4 = document.createElement("p");

      let textoParrafo1 = document.createTextNode(calcularPromedio(numeros));
      let textoParrafo2 = document.createTextNode(buscarNumeroMasPequeño(numeros));
      let textoParrafo3 = document.createTextNode(buscarNumeroMasGrande(numeros));
      let textoParrafo4 = document.createTextNode(buscarNumeroMasFrecuente(numeros))

      nuevoParrafo1.appendChild(textoParrafo1);
      nuevoParrafo2.appendChild(textoParrafo2);
      nuevoParrafo3.appendChild(textoParrafo3);
      nuevoParrafo4.appendChild(textoParrafo4);

      nodoPagina.appendChild(nuevoParrafo1);
      nodoPagina.appendChild(nuevoParrafo2);
      nodoPagina.appendChild(nuevoParrafo3);
      nodoPagina.appendChild(nuevoParrafo4);

  }

}