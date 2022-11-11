// Nivel 2

/*
    Introducción
    ============

    ¡Bienvenido al nivel 2! Es tiempo de interactuar con HTML.

    Los archivos Hyper Text Markup Language (HTML) son la columna vertebral de Internet.
    Cada sitio web que visita se carga primero como un archivo HTML.

    No hablaremos demasiado sobre HTML hoy. Lo que necesitas saber es que los archivos HTML
    funcionan como una especie de esqueleto para tu página. Nuestro archivo index.html
    combina todos los archivos de este proyecto para que puedas abrirlos en tu navegador web.

    Este proyecto tiene un archivo llamado index.html. Al final de index.html usted
    verá la siguiente etiqueta:

    <script src="js/nivel1.js"></script>

    Así es como has estado ejecutando el archivo nivel1.js en un navegador. Ahora cambia
     nivel1.js para apuntar a este archivo - nivel2.js.

    ¡Ahora estás listo para comenzar!
*/

/*
    Arrays
    ======

    Un array es una lista ordenada de valores. Podes guardar cualquier cantidad de valores
    dentro. Y también cualquier tipo de valores: números, cadenas, objetos, incluso
    otros Arrays.

    Ejemplo:
*/


/*
    la primer  posicion de un array es la posicion  0

    let animales = ['gato', 'perro', 'caballo'];

    primer posicion = 0 gato
    segunda posicion = 1 perro
    tercera posicion = 2 caballo
    el length del array es 3 por que tiene 3 elementos

    let cosasAleatorias = [2, 'libro', 'hoy es Sabado', 10];

    la primer posicion = 0 tiene 2
    la segunda posicion = 1 tiene libro
    la tercera posicion = 2 tiene hoy es sabado
    la cuarta posicion = 3 tiene 19
    el length del array es de 4 elementos

    let numeros = [1, 2, 8, 19];

      la primer posicion = 0 tiene 1
    la segunda posicion = 1 2
    la tercera posicion = 2 8
    la cuarta posicion = 3 9
    el length del array es de 4 elementos
*/

// TAREA: Crea tu propio array, llamado comidasFavoritas, y escribi dentro algunas
//       cosas que te gustan.

const comidasFavoritas = ["milanesas","pescado", "mariscos", "pastas","asado"]//length del array 4
//l aposicion que este el indice siempre es 1 menos

/* 
posicion 1 indice 0
posicion 2 indice 1
posicion 3 indice 2
posicion 4 indice 3

*/





/*
    Tamaño del Array
    ================
    
    Podemos verificar fácilmente cuántos elementos tenemos en nuestro Array con una propiedad:
    '.length'

    Ejemplo:

    let cosasAleatorias = [2, 'libro', 'hoy es Sabado', 10];
    console.log(cosasAleatorias.length); // Obtendremos 4.
*/

// TAREA: Verifique cuántos valores tiene en su array comidasFavoritas.
// imprimi utilizando console.log el resultado.


console.log(comidasFavoritas.length);
console.log(["milanesas","pescado", "mariscos", "pastas","asado"].length);




/*
    Uso del Array
    =============

    Es útil mantener todos estos valores en un solo lugar. Pero, y si queremos
    utilizar solo 1 elemento del array?

    Podemos sacarlos usando 'notación de corchetes'. Gracias a un tipo llamado Edsger
    Dijkstra *, los índices del array se comienzan a contar desde 0. El uso se ve así.

    Ejemplo:

    let cosasAleatorias = [2, 'libro', 'hoy es Sabado', 10];
    let primerItem = cosasAleatorias[0];//2
    let segundoItem = cosasAleatorias[1]; y así sucesivamente //libro

    * https://www.cs.utexas.edu/users/EWD/transcriptions/EWD08xx/EWD831.html
*/

// TAREA: Obtené el tercer elemento de tu array comidasFavoritas e imprimilo utilizando console.log.

console.log(comidasFavoritas[2]);





/*
    Cambio de Valores en Arrays
    =========================

    También podemos reemplazar los valores dentro de los arrays asignando un nuevo valor a
    un índice específico.

    Ejemplo:

    let animales = ['gato', 'perro', 'caballo'];

    // reemplacemos 'perro' con 'pez'
    animales[1] = 'pez';

    // ahora nuestro array de animales sera ['gato', 'pez', 'caballo'];
*/

// TAREA: Toma tu array de comidasFavoritas y reemplaza el primer valor
// con cualquier otra cosa.
console.log(comidasFavoritas);
comidasFavoritas[0] = 'Ravioles';





// TAREA: console.log todo el array para verificar.

console.log(comidasFavoritas);







// TIP: ¡No te olvides que las posiciones de índice comienzan desde 0!

/*
    Array.push()
    ============

    Si deseas agregar nuevos valores a un array existente, podes usar el método
     '.push()'. Push agregará un nuevo valor al final del array.

    Ejemplo:

    let animales = ['gato', 'perro', 'caballo'];
    animales.push('conejo');

    // nuestro array de animales sera ['gato', 'perro', 'caballo', 'conejo'];
*/

// TAREA: Extendamos tu lista de comidasFavoritas y agreguemos un valor más.
console.log(comidasFavoritas);
comidasFavoritas.push('pizza');






// TAREA: console.log todo el array para verificar.

console.log(comidasFavoritas);






/*
    Nota acerca Arrays constantes
    =============================

    Un array es lo que se conoce como un "tipo de referencia". Lo que esto significa es que
    incluso si un array se declara (crea) usando 'const', los valores *dentro* del
    array todavía se pueden cambiar; el array en sí no se puede sobrescribir.

    Ejemplo:

    const animales = ['gato', 'perro', 'caballo'];

    // Esto es legal y funciona de la misma manera que cuando los animales son una variable:
    animales[1] = 'pez';
    animales.push('conejo');


    // Esto es ilegal y devolverá un error igual al que se genera al cambiar cualquier constante:
    animales = [ 'mouse', 'elephant' ];
 */

// TAREA: Intenta crear un array como una constante y modifica los valores que contiene.


const a = [1,2,3];
console.log(a);
a[0] = 4;//[4,2,3];
console.log(a);

//Esto no nose puede hacer decir que a es otro array distinto por mas que tenga los mismo valores







// TAREA: Observa lo que sucede si agregas algo con.push(), cambias algo
//       con notación de corchetes (array[1]) y
//       asigna un nuevo array completamente nuevo a la constante

const x = [1,2,3];
console.log(x);
x[0] = 4;//[4,2,3];
console.log(x);

x.push(6);
console.log(x);



/*
    Bucles
    ======
    
    ¡La gente siempre ha sido perezosa, pero a veces avanza! A nosotros
    no nos gusta repetir las mismas aburridas acciones una y otra vez, 
    así que buscamos formas de evitarlo.

    La programación es igual. Por ejemplo, si quiero imprimir 10 veces 'JavaScript 
    es increible!', ¿cuáles son mis opciones?. Por supuesto, puedo escribir 
    diez líneas de código repitiendo la misma instrucción, pero también 
    puedo decirle a la computadora que lo repita en lugar de que yo lo escriba 10 veces.

    Para esto usamos bucles.

    Cada iteracion debe tener tres cosas principales:
     - un punto de partida
     - una condición (punto final)
     - un contador (un paso)

tiene que empezar de algun lado  ejemplo;
impriman los primero 100 numeros
# el punto de partida seria 0/1 depende
#¿cual es la condicion?haber llegado a 100
#tambien necesitamos un contador  que nos indique cuantas veces fuimos imprimiendo
entonces en cada momnetos vamos aumetar el contador en 1
en otros casoa vamos a decrementar el contador en 1


     Si te olvidas uno de estos, ¡podes entrar en un bucle infinito!

     Veamos diferentes estructuras de bucle.

*/

/*
    Bucles while (mientras)
    ============

    El bucle 'While' hará una acción para siempre hasta que se cumpla alguna condición.

    Ejemplo:

    // punto de partida
    let numero = 0;

    while (numero < 10) {//esto se va ejecutar hasta que la condicion de falso
      // 'menos de 10' es una condición (punto final)

      console.log('JavaScript es increíble!');

      numero = numero + 1;
      // + 1 es un contador / tamaño del paso
    }
*/


let numero = 0;//contador o acumulador

while(numero < 10){
    numero += 1;
}

//TAREA
// TAREA: Usando un bucle 'while', decile a tu computadora que registre los números de
//       diez a uno.
//HINT: contadores pueden ser para arriba o para abajo

let numero2 = 10;

while(numero2 < 0){
    numero -= 1;
}






/*
    Bucles for (para)
    ==========

    Los bucles for son muy similares al 'bucle while'. En un bucle for
    se declara un contador en la declaración.

    Ejemplo:

    let i;
    for (i = 0; i <= 5; i = i + 1) {  // (punto de partida; condicion; paso)
      console.log('Hola!');
    }
for (asi arranco(i = 0; i) if(<= 5;) contador(i = i + 1))
for (asi arranco(i = 0; i) if(<= 5;) contador(i++))


*/

let i;
for (let i = 0; i <=5; i++) {
    console.log(`Hola ${i}`);
    
}

// TAREA: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.

for (let i = 3; i < 23; i+=3) {
    console.log(i);
    
}

//Ejercicio


const notaParciales = [10,4,5,6];

let totalNotas = 0;//los acumuladores siempre van afuera
for(let i=0; i < notaParciales.length; i++){
    totalNotas = totalNotas + notaParciales[i];
}
 console.log('El promedio es ' + totalNotas / notaParciales.length);


 //TAREA: Hacer una funcion que se llame calcualr promedio
 //que tome como parametro un array

/*
    Iterando a traves de Arrays
    ===========================

    Ahora que conocemos los bucles, vamos a usar cada valor de mi lista de animales
    y expresar mi amor por cada uno ¿Cómo lo voy a hacer?

    Podemos usar un 'bucle for' para iterar a través de nuestro array y obtener cada valor
    de eso.

    Nota: i++ es otra forma de expresar i = i + 1.

    Ejemplo:

    const animales = ['gatos', 'perros', 'caballos'];

    for(let i = 0; i < animales.length; i++){
        console.log('Me gustan los ' + animales[i]); //animales[i] se lee "animales en i"
    }
*/

// TAREA: Probalo con tu comidasFavoritas array.

for (let i = 0; i <comidasFavoritas.length; i++) {
    console.log('Me gusta ' + comidasFavoritas[i]);
    
}




/*
    Bucles y Logica
    ===============
    
    Traigamos bucles junto con las declaraciones if / else que aprendimos en
    nivel 1, y hagamos algo interesante.


    Contemos de 10 a 0 e imprimamos todos los números. Pero cuando lleguemos al
    medio (5) imprimimos 'Estamos en el medio!'.

    Ejemplo:

    for (let i = 10; i >= 0; i = i - 1) {
        if (i === 5) {
            console.log('Estamos en el medio!');
        } else {
            console.log(i);
        }
    }
*/

//10,9,8,7,6, estamos en el medio!, 4,3,2,1,0
for (let i = 10; i >= 0; i--) {
    if(i === 5){
        console.log('Estamos en el medio!');
    }else{
        console.log(i);
    }
    
}
for (let i = 0; i <= 10; i++) {
    if(i === 5){
        console.log('Estamos en el medio!');
    }else{
        console.log(i);
    }
    
}





// TAREA: Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'.

// Cuenta del 1 al 50 e imprime los números:
//
// * Si un número es múltiplo de tres, imprime 'Fizz'.
// * Si es un múltiplo de 5, imprime 'Buzz'.
// * Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
// * Para todo lo demás, imprime el número mismo.

// NOTA: Es posible que desees utilizar el operador aritmético modulo (%):
// Calcula el resto al dividir.
//
// 10% 3 = 1 - en 10 tenemos 3 * 3 + 1
// 16% 4 = 0 - en 16 tenemos 4 * 4
// 19% 4 = 3 - en 19 tenemos 4 * 4 + 3, etc.


for (let i = 1; i <=50; i++) {
    if(i%3 === 0 && i%5 === 0){
        console.log("FizzBuzz");
    }else if(i%3 === 0){
        console.log("Fizz");
    }else if(i%5 === 0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
    
}



//////////////////////////////////////////////////////////////////////////////
// ¡Felicidades! ¡Has terminado el Nivel 2 de JavaScript Básico!            //
// Levántate, estira las piernas y celebra tu logro.                        //
// El siguiente paso será seguir las instrucciones en el archivo nivel3.js. //
/* ////////////////////////////////////////////////////////////////////////////// */
