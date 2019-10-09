
// % significa el resto de la división entre esos números. Si es multiplo el resto siempre va a ser 0.
// para sacar pares o impares, es si %2 te da 0 o 1.



for (let i = 1; i <= 50; i += 1) {
    if (i%3 === 0 && i%5 === 0) {
        console.log("FizzBuzz");
    } else if (i%3 === 0){
        console.log("Fizz");
    } else if (i%5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i)
    }
}
//SALIO PAPAAAAA, la condicion de los dos juntos tenía que ir primero porque si no entraba en if3 o if5

//Aca abajo ejemplos de los demás

for (let i = 1; i <= 50; i++){
    let mostrar = "";
        if (i % 3 === 0) {
            mostrar += "Fizz";
       }
        if (i % 5 === 0){
            mostrar += "Buzz";
       }
    console.log(mostrar || i);}
//este esta piola, concatena el string con dos if

