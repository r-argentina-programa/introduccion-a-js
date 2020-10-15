function obtenerSalarioAnualMayor(salariosAnuales){
    
    let salarioAnualMayor = salariosAnuales[0];
    
    for(let i = 0; i < salariosAnuales.length; i++){
    
        if(salariosAnuales[i] > salarioAnualMayor){
            salarioAnualMayor = salariosAnuales[i];
        }
    }
    
    return salarioAnualMayor;
}
    
function obtenerSalarioAnualMenor(salariosAnuales){
    
    let salarioAnualMenor = salariosAnuales[0];
    
    for(let i = 0; i < salariosAnuales.length; i++){
            
        if(salariosAnuales[i] < salarioAnualMenor){
            salarioAnualMenor = salariosAnuales[i];
        }
    }
    
    return salarioAnualMenor;
}
  

function obtenerSalarioAnualPromedio(salariosAnuales){
    
    let acumulador = 0;
    
    for(let i = 0; i < salariosAnuales.length; i++){
    
        acumulador = acumulador + salariosAnuales[i];
    }
    
    return (acumulador / salariosAnuales.length).toFixed(2);
}
 

function obtenerSalarioMensualPromedio(salarios){
    
    let acumulador = 0;
    
    for(let i = 0; i < salarios.length; i++){
    
        acumulador = acumulador + salarios[i];
    }
        
    return (acumulador / salarios.length).toFixed(2);
}
