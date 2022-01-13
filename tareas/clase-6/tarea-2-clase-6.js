
document.querySelector("#boton-agregar").onclick = function() {
    
    const nodoPagina = document.querySelector("form");
    const nuevoLabel = document.createElement("label");
    const nuevoInput = document.createElement("input");
    const textoLabel = document.createTextNode("Ingrese sueldo mensual");
    const botonCalcular = document.querySelector("#boton-calcular");
  

    nuevoLabel.appendChild(textoLabel);
    nuevoLabel.appendChild(nuevoInput);
    nodoPagina.appendChild(nuevoLabel);
    botonCalcular.style.display = 'inline-block';
    nuevoInput.setAttribute("class", "sueldos")
	nuevoInput.type = "number";
		
    
    return false

}

document.querySelector("#boton-calcular").onclick = function() {

    const resultados = document.querySelector("#resultados");
    const sueldosMensuales = document.querySelectorAll(".sueldos");
    
    resultados.style.display = "inline-block";

    let sueldosAnuales = calcularSueldosAnuales(sueldosMensuales);
    
    

    function calcularPromedioMensual(sueldosMensuales) {
		
        let contador = 0;

		for(let i =0; i < sueldosMensuales.length; i++) {
			contador += Number(sueldosMensuales[i].value);
		}

		const salarioPromedioMensual = contador / sueldosMensuales.length;
		
		document.querySelector("#salario-promedio-mensual").textContent = salarioPromedioMensual;
	};

    function calcularSueldosAnuales (sueldosMensuales) {

        let totalAnuales = [];

        for (let i=0; i < sueldosMensuales.length; i++) {

            let calculoSueldoMensuales = sueldosMensuales[i].value * 12;

            totalAnuales.push(calculoSueldoMensuales);
        };
        

        return totalAnuales;
    };

    function calcularSueldoMayor (sueldosAnuales) {

        let sueldoMayor = [];

       for(let i =0; i < sueldosAnuales.length; i++) {

            if( sueldoMayor < sueldosAnuales[i] ){

                sueldoMayor = sueldosAnuales[i]
            }
       };

       document.querySelector("#salario-mayor").textContent = sueldoMayor;
    };

    function calcularSueldoMenor (sueldosAnuales) {

        let sueldoMenor = sueldosAnuales[0];

        for (let i =0; i < sueldosAnuales.length; i++){
            
            let sueldos = sueldosAnuales[i];

            if( sueldos === 0){
                return true;
                
            }else if ( sueldos < sueldoMenor) {
                sueldoMenor = sueldos;
            }
              
        };
        document.querySelector("#salario-menor").textContent = sueldoMenor;

    };

    function calcularPromedioAnual (sueldosAnuales) {

        let contador = 0;

        for(let i =0; i < sueldosAnuales.length; i++) {
            contador += sueldosAnuales[i];
        };

        const sueldoPromedioAnual = contador / sueldosAnuales.length;

        document.querySelector("#salario-promedio-anual").textContent = sueldoPromedioAnual;
    };

    calcularPromedioMensual(sueldosMensuales);
    calcularSueldosAnuales (sueldosMensuales);
    calcularSueldoMayor(sueldosAnuales);
    calcularSueldoMenor(sueldosAnuales);
    calcularPromedioAnual(sueldosAnuales);


};

document.querySelector("#boton-eliminar").onclick = function() {
   
   const nodoPagina = document.querySelector("form");
   const nuevoLabel = document.querySelector("label");

    nodoPagina.removeChild(nuevoLabel);

}