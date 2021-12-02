document.querySelector("#siguiente-paso").onclick = function(event){
    const  $cantidadClases = document.querySelector("#cantidad-clases")
    const   cantidadClases = Number($cantidadClases.value)
   
    borrarClasesAnteriores()
    crearClases(cantidadClases)
   
   
   
    event.preventDefault()
   
   }
   
   document.querySelector("#boton-calcular").onclick = function(event){
       const horas = obtenerHoras()
       const minutos = obtenerMinutos()
       const segundos = obtenerSegundos()
       mostrarResultados("horas",calcularHoras(horas))
       mostrarResultados("minutos",calcularMinutos(minutos))
       mostrarResultados("segundos",calcularSegundos(segundos))
   
       mostrarResultadoFinal()
   
   
       event.preventDefault()
   }
   
   function crearClases(cantidadClases){
       
               if(cantidadClases > 0){
                   mostrarBotonCalcular()
               }
               for (let i = 0; i < cantidadClases; i++)
               crearClase(i);
               
       }
   
   function borrarClasesAnteriores(){
       const $clases = document.querySelectorAll(".clase")
       for (let i = 0; i < $clases.length; i ++){
           $clases[i].remove()
       }
   }
   
   function crearClase(indice){
       
       
       const $div = document.createElement ("div")
       $div.className = "clase";
   
       const $labelHoras = document.createElement("label")
       $labelHoras.textContent = "Ingrese cantidad Horas de video " + (indice + 1)
   
       const $inputHoras = document.createElement("input")
       $inputHoras.className = "inputHoras"
       $inputHoras.type = "number"
   
       const $labelMinutos = document.createElement("label")
       $labelMinutos.textContent = "Ingrese cantidad Minutos de video " + (indice + 1)
   
       const $inputMinutos = document.createElement("input")
       $inputMinutos.className = "inputMinutos"
       $inputMinutos.type = "number"
   
       const $labelSegundos = document.createElement("label")
       $labelSegundos.textContent = "Ingrese cantidad Segundos de video " + (indice + 1)
   
       const $inputSegundos = document.createElement("input")
       $inputSegundos.className = "inputSegundos"
       $inputSegundos.type = "number"
      
       $div.appendChild($labelHoras)
       $div.appendChild($inputHoras)
       $div.appendChild($labelMinutos)
       $div.appendChild($inputMinutos)
       $div.appendChild($labelSegundos)
       $div.appendChild($inputSegundos)
   
   
       const $clases = document.querySelector("#placeholder")
       $clases.appendChild($div)
   }
   
   function mostrarBotonCalcular(){
       document.querySelector("#boton-calcular").className = ""
   }
   
   function mostrarResultados(tipo,valor){
       document.querySelector(`#${tipo}-cantidad`).textContent = valor;
   }
   
   function mostrarResultadoFinal(){
       document.querySelector("#resultados").className = ""
   }
   
   function obtenerHoras(){
       const $horas = document.querySelectorAll(".inputHoras")
       const horas = []
       for (let i = 0; i < $horas.length; i++){
           horas.push(Number($horas[i].value))
   
   }
   return horas
   }
   
   
   
   function obtenerMinutos(){
       const $minutos = document.querySelectorAll(".inputMinutos")
       const minutos = []
       for (let i = 0; i < $minutos.length; i++){
           minutos.push(Number($minutos[i].value))
   
   }
   return minutos
   }
   
   
   
   function obtenerSegundos(){
       const $segundos = document.querySelectorAll(".inputSegundos")
       const segundos = []
       for (let i = 0; i < $segundos.length; i++){
           segundos.push(Number($segundos[i].value))
   
   }
   return segundos
   }
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   