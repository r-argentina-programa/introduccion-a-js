//Link original y créditos a https://github.com/CodeGuppyPrograms/CodingChallenges (contiene las respuestas).

/*
Estos desafíos de coding están enfocados para los principiantes, por lo tanto las soluciones fueron implementadas
usando  elementos de programación simples y clásicos.
*/

/*
Desafío de programación #1: Imprimí los números del 1 al 10

 Resultado: 10 9 8 7 6 5 4 3 2 1
*/


function tarea1() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    };
};
//tarea1();
/*
 Desafìo de programación  #2: Imprimí los números impares del 1 al 100

 1 3 5 ... 99
 */
function tarea2() {
    let i = 1;
    while (i <= 100) {
        console.log(i);
        i++;
    };
}

//tarea2();
/*

Desafío de programación #3: Imprimí la tabla de multiplicación del 7

 7x0 = 0
 7x1 = 7
 ...
 7x9 = 63
 */
function tarea3() {
    const TABLA7 = 7;
    for (let i = 0; i <= 10; i++) {
        let resultado = TABLA7 * i;
        console.log(`${TABLA7} * ${i} = ${resultado}`);
    };
}
//tarea3();
/*

Desafío de programación #4: Imprimí todas las tablas de multiplicación del 1 al 9

 1x0 = 0
 ...
 1x9 = 9
 2x0 = 0
 ...
 2x9 = 18
 ...
 ...
 9x9 = 81
 */
function tarea4() {
    const TABLAS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let e in TABLAS) {
        for (let i = 1; i <= 10; i++) {
            let resultado = TABLAS[e] * i;
            console.log(`${TABLAS[e]} * ${i} = ${resultado}`)
        };
    };
};
//tarea4();
/*

Desafío de programación #5: Calcula el resultado de la suma de los numeros del 1 al 10 en un array.
 [1,2,3,4,5,6,7,8,9,10]

 1 + 2 + 3 + ... + 10 = ? //hacerlo con un array y un bucle
 */
function tarea5() {
    {
        let suma = 0;
        for (let i = 1; i <= 10; i++) {
            suma += i;
        };
        console.log(suma);
    };

};
//tarea5();
/*

Desafío de programación #6: Calcula 10! (10 factorial)

 10 * 9 * 8 * ... * 1
 */

function tarea6() {
    let factorial = 1;
    for (let i = 10; i > 0; i--) {
        factorial *= i;
    };
    console.log(factorial);
};
//tarea6();


/*

Desafío de programación #7: Calcula la suma de todos los números impares mayores que 10 y menores que 30
*/
function tarea7() {
    for (let i = 11; i <= 30; i += 2) {
        console.log(i);
    };
};
//tarea7();

/*

Desafío de programación #8: Crea una función que convierta de Celsius a Fahrenheit
*/
function tarea8() {
    function celsiusFahrenheit() {
        const celsius = Number(prompt('Ingrese la Temperatura en Celsius', '20'));
        let resultado = celsius * 9 / 5 + 32;
        console.log(`La temperatura en Fahrenheit es ${resultado}º`);
    };
    celsiusFahrenheit();
};
//tarea8();

/*

Desafío de programación #9: Crea una función que convierta de Fahrenheit a Celsius
*/
function tarea9() {
    function fahrenheitCelcius() {
        const fahrenheit = Number(prompt('Ingrese la tempuratura en Fahrenheit', '68'));
        let resultado = (fahrenheit - 32) * 5 / 9;
        console.log(`La temperatura en Celsius es ${resultado}º`);
    };
    fahrenheitCelcius();
};
//tarea9();
/*

Desafío de programación #10: Calcula la suma de todos los números en un array de números
*/
function tarea10() {
    function sumaArray() {
        const array = [1, 2, 3, 4, 5];
        let suma = 0;
        for (let i in array) {
            suma += array[i];
        };
        console.log(suma);
    };
    sumaArray();
};
//tarea10();

/*

Desafío de programación #11: Calcula el promedio de todos los números en un array de números. (en una función)
*/
function tarea11() {
    function promedioArray() {
        const array = [2, 4, 6, 8, 10];
        let suma = 0;

        for (let i in array) {
            suma += array[i];

        };

        console.log(suma / array.length);
    };
    promedioArray();
};
//tarea11();
/*

Desafío de programación #12: Crea una función que reciba un array de números y devuelva un array conteniendo solo los números positivos
*/
function tarea12() {
    function arrayPositivos() {
        const array = [1, -4, -7, 9, 10];
        let arrayPositivos = [];
        for (let i in array) {
            if (array[i] > 0) {
                arrayPositivos.push(array[i]);
            };
        };
        console.log(arrayPositivos);
    };
    arrayPositivos();
};
//tarea12();
/*

Desafío de programación #13: Find the maximum number in an array of numbers
*/
function tarea13() {
    function mayorArray() {
        const array = [64, 389, 92, 3, 1992, 8476759034, 988976790];
        let resultado = array[0];
        for (let i in array) { //itera sobre cada elemento no simbolos
            if (array[i] > resultado) {
                resultado = array[i];
            };
        };
        console.log(resultado);
    };
    mayorArray();
};
//tarea13();
/*

Desafío de programación #14: Imprimir los primeros 10 dígitos de Fibonacci sin recursión
Fibonacci (lo buscan en google si no lo saben o no se acuerdan)
El resultado debería ser: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
*/
function tarea14() {
    function fibonacci() {
        let fibonacci = [0, 1, 1];
        for (let i = 1; i < 8; i++) {
            let nuevo = (fibonacci[fibonacci.length - 1]) + fibonacci[i];
            fibonacci.push(nuevo);
        };
        console.log(fibonacci);
    };
    fibonacci();
};
//tarea14();
/*

Desafío de programación #15: Crear una función que encuentre el número n de Fibonacci usando recursión
*/
function tarea15() { //verlo con breakpoints
    let n = buscarNFibonacci(6);

    function buscarNFibonacci(n) {
        if (n === 0)
            return 0;
        if (n === 1)
            return 1;
        return buscarNFibonacci(n - 1) + buscarNFibonacci(n - 2);
    }
    console.log(n);
}
//tarea15(); // tambien ver diferencias en for IN OF

/*
Desafío de programación #16: Crear una función que dado un número retorne un Boolean (true/false) dependiendo si es primo o no.
*/
function tarea16() {
    function esPrimo(n) {
        if (n < 2)
            return false;
        if (n === 2)
            return true;
        let maxDiv = Math.sqrt(n); //raiz cuadrada
        for (let i = 2; i <= maxDiv; i++) {
            if (n % i == 0) {
                return false;
            };
        };
        return true;
    };
    console.log(2 + " es primo? " + esPrimo(2));
    console.log(`3 es primo? = ${esPrimo(3)}`);
    console.log(4, " es primo? ", esPrimo(4)); //otra forma de mostrar en consola
    console.log(5, " es primo? ", esPrimo(5));
    console.log(9, " es primo? ", esPrimo(9));
};
//tarea16();

/*
Desafío de programación #17: Calcular la suma de los dígitos positivos de un número entero positivo
Ejemplo:
   123 = 1 + 2 + 3 = 6
   2 = 2
   1234 = 1 + 2 + 3 + 4 = 10
   */
function tarea17() {
    const suma = sumaDigitos(123);

    function sumaDigitos(n) {
        const s = n.toString(); // transforma en string
        let suma = 0;

        for (let caracter of s) { // ejecuta sobre cada elemento
            const digito = parseInt(caracter); //convierte un string a entero
            suma += digito;
        }

        return suma;
    }


    console.log("Suma: ", suma);
};
//tarea17();
/*

Desafío de programación #18: Imprimir los primeros 100 números primos
*/
function tarea18() {
    numerosPrimos(100);

    // imprime los primeros 100 numeros primos
    function numerosPrimos(nPrimos) {
        let n = 0;
        let i = 2;

        while (n < nPrimos) {
            if (esPrimo(i)) {
                console.log(n, " --> ", i);
                n++;
            }

            i++;
        }
    }


    // retorna TRUE si es numero primo
    function esPrimo(n) {
        if (n < 2)
            return false;

        if (n == 2)
            return true;

        let maxDiv = Math.sqrt(n);

        for (let i = 2; i <= maxDiv; i++) {
            if (n % i == 0) {
                return false;
            }
        }

        return true;
    }
};
//tarea18();

/*
Desafío de programación #19: Crear una función que retorne un array con los primeros números "n-primos" mayores que un número particular definido "alComienzo"
Ejemplo:
  Quiero los primeros 4 números primos mayores que 5, el resultado debería ser: [7,11,13,17,19]
  */
function tarea19() {
    console.log(obtenerPrimos(10, 100));

    function obtenerPrimos(nPrimos, empiezaEn) {
        let array = [];

        let i = empiezaEn;

        while (array.length < nPrimos) {
            if (esPrimo(i)) {
                array.push(i);
            }

            i++;
        }

        return array;
    }

    // retorna TRUE si el numero es primo
    function esPrimo(n) {
        if (n < 2)
            return false;

        if (n == 2)
            return true;

        let maxDiv = Math.sqrt(n);

        for (let i = 2; i <= maxDiv; i++) {
            if (n % i === 0) {
                return false;
            }
        }

        return true;
    }

};
//tarea19();
/*

Desafío de programación #20: Rotar un array hacia la izquierda una posición
Ejemplo:
  [9,1,2,3,4] debería quedar como [1,2,3,4,9]
  [5] debería quedar como [5]
  [4,3,2,1] debería quedar como [3,2,1,4]
  */
function tarea20() {
    let ar = [1, 2, 3];
    console.log(ar);

    function rotarIzquierda(ar) {
        let first = ar.shift(); //borra el primer elemento y lpo retorna por lo que se puede guardar en una variable
        ar.push(first); // agrega un elemento al principio del array
    }
    rotarIzquierda(ar);
    console.log(ar);
};
//tarea20();
/*

Desafío de programación #21: Rotar un array a la derecha una posición
Ejemplo:
  [2,3,4,1] debería quedar como [1,2,3,4]
  [2,3] debería quedar como [3,2]
  */
function tarea21() {
    let array = [2, 3, 4, 1];
    console.log(array);

    rotarDerecha(array);

    function rotarDerecha(array) {
        let last = array.pop(); // borra el ultimo elemento y lo retorna por lo que se puede almacenar en una variable
        array.unshift(last); // agreaga al final un elemento
    };
    console.log(array);
};
//tarea21();


/*

Desafío de programación #22: Invertir un array
Ejemplo:
  [1,2,3,4] debería quedar como [4,3,2,1]
  [6,5,4,3,2,1] debería quedar como [1,2,3,4,5,6]
  [5,6,3] debería quedar como [3,6,5]
*/
function tarea22() {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    console.log(array);
    array.reverse(); // cambia toda la dirrecion del array
    console.log(array);
    //otra opcion
    const ar = [1, 2, 3];
    console.log(ar);
    let ar2 = revertirArray(ar);
    console.log(ar2);

    function revertirArray(ar) {
        let ar2 = []; //este ar2 es de otro scope

        for (let i = ar.length - 1; i >= 0; i--) {
            ar2.push(ar[i]); // se pushea elementos de forma negativa
        }

        return ar2;
    }

};
//tarea22();
/*
Desafío de programación #23: Invertir una cadena de caracteres
Ejemplo:
  "dabale arroz a la zorra el abad" debería quedar como "daba le arroz al a zorra elabad"
  "bienvenido" debería quedar como "odinevneib"
*/
function tarea23() {
    let string = "Bienvenidos";
    let revertirString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        revertirString += string[i];
    };
    console.log(string);
    console.log(revertirString);
};
//tarea23();
/*
Desafío de programación #24: Crear una función que reciba dos arrays (arreglos) como argumentos y returne el resultado en un nuevo arreglo
Ejemplo:
  [1,2,3] con ["a","b","c"] debería quedar como [1,2,3,"a","b","c"]

*/


function tarea24() {

    const ar1 = [1, 2, 3];
    const ar2 = [4, 5, 6];
    console.log(ar1);
    console.log(ar2);

    let resultado = unirArray(ar1, ar2);

    function unirArray(ar1, ar2) {
        let unir = [];

        for (let elemento of ar1) {
            unir.push(elemento);
        }

        for (let elemento of ar2) {
            unir.push(elemento);
        }

        return unir;
    }
    console.log(resultado);
};
//tarea24();
/*
Desafío de programación #25: Crear una función que reciba dos arrays (arreglos) de números como argumentos y retorne un array con números que estén en uno u otro array, pero NO en ambos.
Nota: Esto se llama "diferencia simétrica" entre conjuntos
*/
function tarea25() {
    const array1 = [1, 2, 3, 4, 5, 6];
    const array2 = [3, 4, 5, 6, 7, 8, 9];
    console.log(array1);
    console.log(array2);

    let resultado = diferenciaSimetrica(array1, array2);

    function diferenciaSimetrica(array1, array2) {
        let unir = [];

        for (let elemento of array1) {
            if (!array2.includes(elemento)) { // que el array contenga dicho elemento
                unir.push(elemento);
            };
        };
        for (let elemento of array2) {
            if (!array1.includes(elemento)) { // ! para que el array no contenga dicho elemento
                unir.push(elemento);
            };
        };
        return unir;
    };
    console.log(resultado);
};
//tarea25();
/*
Desafío de programación #26: Crear una función que reciba dos arrays (arreglos) de números como argumentos y retorne un array con números que estén en uno u otro array, pero NO en ambos.
Ejemplo:
  [1,2,3] y [3,7,11] debería devolver [1,2,7,11]
  [5,10,3] y [10,1] debería quedar como [5,3,1]
  */
function tarea26() {
    const array1 = [1, 2, 3, 4, 5, 6];
    const array2 = [1, 2, 3, 7, 8, 9, 0, 12, 6];
    console.log(array1);
    console.log(array2);

    let resultado = numerosUnicos(array1, array2);

    function numerosUnicos() {
        let unir = [];
        for (let elemento of array1) {
            if (!array2.includes(elemento)) {
                unir.push(elemento);
            };
        };

        return unir;
    };
    console.log(resultado);
};
//tarea26();
/*

Desafío de programación #27: Crear una función que reciba dos arrays de números y retorne un nuevo array con los elementos que se encuentren en el primer array, pero no en el segundo
Nota; Esto se llama "resta" entre conjuntos
Ejemplo:
  [5,1,2,3,4] y [3,4] debería devolver [5,1,2]
*/
function tarea27() {
    let array = obtenerElementosUnicos([1, 2, 3, 6, -1, 2, 9, 7, 10, -1, 100, 100, 101]);

    function obtenerElementosUnicos(array) {
        var resultado = [];

        for (let i in array) {
            if (!enArray(array[i], resultado)) {
                resultado.push(array[i]);
            };
        };

        return resultado;
    };

    function enArray(resultado, array) { //resultado podria llamarse n y seguiria funcionando si cambio todos los resultados por n por ejemplo.
        for (let i in array) {
            if (array[i] === resultado)
                return true; //si es igual no cumple el if de la otra funcion y no se agrega
        }

        return false; // no es igual asi que se agrega
    };
    console.log(array);
};
//tarea27();



/*
Desafío de programación #27b: Crear una función que reciba un array de números como argumento y retorne un array con los elementos distintos
Ejemplo:
   [1,2,3,4,5,4,3,2,1,0] debería retornar [1,2,3,4,5,0]
*/
function tarea27b() {
    let ar = obtenerElementosUnicos([1, 2, 3, 6, -1, 2, 9, 7, 10, -1, 100, 101, 100]);
    const array = [1, 2, 3, 6, -1, 2, 9, 7, 10, -1, 100, 101, 100];
    console.log(array);

    function obtenerElementosUnicos(ar) {
        let resultado = [];

        let ultimoIndice = ar.length - 1;

        for (let i = 0; i <= ultimoIndice; i++) {
            if (!enArray(ar[i], ar, i + 1, ultimoIndice)) {
                resultado.push(ar[i]);
            }
        }

        return resultado;
    }

    function enArray(resultado, ar, deIndice, aIndice) {
        for (var i = deIndice; i <= aIndice; i++) {
            if (ar[i] === resultado)
                return true;
        }

        return false;
    }

    console.log(ar);
};
//tarea27b(); // retorna elementos unicos de atras para adelante
/*

==== FALTAN TRADUCIR
Desafío de programación #28: Calcular la suma de los primos 100 numeros primos
*/
function tarea28() {
    const n = 100; // numero maximo de numeros primos

    function sumaPrimos(n) {
        let contarPrimos = 0; // cuenta solo los numeros primos
        let i = 2; // iteracion desde 2 porq numeros menores no son primos
        let sum = 0; // suma todos los numeros primos

        while (contarPrimos < n) {
            if (esPrimo(i)) {
                contarPrimos++;
                sum += i;
            }

            i++;
        }

        return sum;
    }

    // retornar true si el N es primo
    function esPrimo(n) {
        if (n < 2)
            return false;

        if (n === 2)
            return true;

        let maxDiv = Math.sqrt(n);

        for (let i = 2; i <= maxDiv; i++) {
            if (n % i === 0) {
                return false;
            }
        }

        return true;
    }
    console.log("La suma de los primeros ", n, " numeros primos es ", sumaPrimos(100));
};
//tarea28();
/*
Desafío de programación #29: Imprimi la distancia entro los primos 100 numeros primos
*/
function tarea29() {


    // imprimir distancia entre el primer primo y N primo
    function imprimirDistanciaPrimos(n) {
        let ultimoPrimo = 2,
            i = ultimoPrimo + 1,
            encontrarPrimo = 1;

        while (encontrarPrimo < n) {
            if (esPrimo(i)) {
                console.log("Distancia entre ", ultimoPrimo, " y ", i, " = ", i - ultimoPrimo);

                encontrarPrimo++;
                ultimoPrimo = i;
            };

            i++;
        };
    };

    //retorna True si es primo
    function esPrimo(n) {
        if (n < 2)
            return false;

        if (n == 2)
            return true;

        let maxDivision = Math.sqrt(n);

        for (let i = 2; i <= maxDivision; i++) {
            if (n % i === 0) {
                return false;
            }
        }

        return true;
    }
    imprimirDistanciaPrimos(100);
};
//tarea29();
/*
Desafío de programación #30-a: Cree una función que sume dos números positivos de tamaño indefinido. Los números se reciben como cadenas y el resultado también debe proporcionarse como cadena.
*/
function tarea30a() {
    const n1 = "2909034221912398942349",
        n2 = "1290923909029309499"; // no escribo let porque la variable anterior termina con una ","

    let resultado = agregar(n1, n2);

    function agregar(stringNumbero1, stringNumbero2) {
        let s = "",
            agregar = 0,
            maxTamanio = Math.max(stringNumbero1.length, stringNumbero2.length); //metodo matematico que retorna el mayor numero

        for (let i = 0; i < maxTamanio; i++) {
            let digito1 = digitoDerecha(stringNumbero1, i),
                digito2 = digitoDerecha(stringNumbero2, i),

                resultado = digito1 + digito2 + agregar,
                digitoSuma = resultado % 10;

            agregar = resultado >= 10 ? 1 : 0; //condicional ternaria. 
            //condicion. Si todo es false (&&) devuelve el segundo (||) retorna el primero

            s = digitoSuma.toString() + s; // convierte a string
        };

        if (agregar > 0)
            s = agregar + s;

        return s;
    };

    function digitoDerecha(s, digitoNo) {
        if (digitoNo >= s.length) {
            return 0;
        };

        let caracter = s[s.length - 1 - digitoNo];
        return parseInt(caracter); //convierte a numero entero
    };
    console.log(`"${n1}" + "${n2}" = "${resultado}"`);
};
//tarea30a();
/*
Desafío de programación #30-b: Cree una función que sume dos números positivos de tamaño indefinido. Los números se reciben como cadenas y el resultado también debe proporcionarse como string.
*/

function tarea30b() {

    const n1 = "2909034221912398942349",
        n2 = "1290923909029309499",
        sum = add(n1, n2);

    function add(sNumber1, sNumber2) {
        //Math.max objeto matematico con metodo maximo. retorna el maximo
        const maxSize = Math.max(sNumber1.length, sNumber2.length),

            s1 = sNumber1.padStart(maxSize, "0"), // padStart. rellena el string desde el indice 0, con el valor del primer argumento, y con el valor del segundo argumento.
            s2 = sNumber2.padStart(maxSize, "0");

        let s = "",
            carry = 0;

        for (let i = maxSize - 1; i >= 0; i--) {
            const digit1 = parseInt(s1[i]),
                digit2 = parseInt(s2[i]), // convierte en numero

                sum = digit1 + digit2 + carry,
                digitSum = sum % 10;

            carry = sum >= 10 ? 1 : 0; //condicion ternario

            s = digitSum.toString() + s; // convierte en string
        };

        if (carry > 0)
            s = carry + s;
        return s;
    };

    console.log(`String1(${n1}) + String2(${n2}) = SumaDeStrings(${sum}`);
};
//tarea30b();
/*
Desafío de programación #31-a. Crea una función que devolverá la cantidad de palabras en un texto.
*/
function tarea31a() {
    // Solucion 1
    function contarPalabras(string) {
        let fueSeparado = true,
            palabra = 0;

        for (let caracter of string) {
            //si el carácter actual es separador, avance y  establezca que el carácter anterior era separador.
            if (separador(caracter)) {
                fueSeparado = true;
                continue;
            };
            // si el carácter actual no es separador ... pero si el anterior fue separador ...
            if (fueSeparado) {
                palabra++;
                fueSeparado = false;
            };
        };
        return palabra;
    };

    function separador(caracter) {
        const separadores = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];
        return separadores.includes(caracter); // retorna el true o false si el elemento esta incluido en el array
    };

    console.log(contarPalabras(""));
    console.log(contarPalabras("            "));
    console.log(contarPalabras("JavaScript!!!   "));
    console.log(contarPalabras("     JavaScript"));
    console.log(contarPalabras("    JavaScript is cool      "));
    console.log(contarPalabras("I like to learn JavaScript with codeguppy"));

};
//tarea31a();
/*
Desafío de programación #31-b. Cree una funcion que retorne cuantas palabras tiene el string
*/
function tarea31b() {
    // Solucion 2
    function contarPalabras(string) {
        let palabra = 0;

        if (string.length > 0 && !estaSeparado(string[0])) {
            string++;
        };
        for (let i = 1; i < string.length; i++) {
            var currChr = string[i];
            var prevChr = string[i - 1];

            if (!estaSeparado(currChr) && estaSeparado(prevChr)) {
                palabra++;
            }
        }

        return palabra;
    }

    function estaSeparado(caracter) {
        const separadores = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];
        return separadores.includes(caracter);
    }

    console.log(contarPalabras(""));
    console.log(contarPalabras("            "));
    console.log(contarPalabras("JavaScript!!!   "));
    console.log(contarPalabras("     JavaScript"));
    console.log(contarPalabras("    JavaScript is cool      "));
    console.log(contarPalabras("I like to learn JavaScript with codeguppy"));
};
//tarea31b();
/*
Desafío de programación #32. Cree una función que ponga en mayúscula la primera letra de cada palabra en un texto
*/
function tarea32() {
    function capitalizarPrimerPalabra(string) {
        let string2 = "";

        for (let i = 0; i < string.length; i++) {
            let caracterActual = string[i],
                caracterPrevio = i > 0 ? string[i - 1] : " "; //condicion ternaria
            if (!estaSeparado(caracterActual) && estaSeparado(caracterPrevio)) {
                caracterActual = caracterActual.toUpperCase();
            };
            string2 += caracterActual;
        };
        return string2;
    };

    function estaSeparado(caracter) {
        const separadores = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?"];
        return separadores.includes(caracter);
    };
    console.log(capitalizarPrimerPalabra("Cree una función que ponga en mayúscula la primera letra de cada palabra en un texto"));
};
//tarea32();
/*
Desafío de programación #33. Calcule la suma de números recibidos en una cadena delimitada por comas
*/
function tarea33() {
    function sumarNumerosEntreComas(string) {
        let array = string.split(","), //metodo para dividir un string
            suma = 0;

        for (let elemento of array) {
            suma += parseFloat(elemento); //primero lo convierte en cadena si es necesario y luego en numero flotante
        };
        return suma;
    }
    console.log(sumarNumerosEntreComas("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));
};
//tarea33();
/*
Desafío de programación #34. Crea una función que devolverá una matriz con palabras dentro de un texto
*/
function tarea34() {
    const string = "Crea una función que devolverá una array con palabras que estaban en una oracion de un string";

    console.log(convertirPalabras(string));

    function convertirPalabras(string) {
        let primerPalabra = -1,
            array = [];

        for (let i = 0; i <= string.length; i++) {
            let caracter = i < string.length ? string[i] : " "; //condicion ternario
            if (!esSeparador(caracter) && primerPalabra < 0) {
                primerPalabra = i;
            };
            if (esSeparador(caracter) && primerPalabra >= 0) {
                let palabra = string.substring(primerPalabra, i); //devuelve un string. sintaxis = substring(string ,start [,length] )
                array.push(palabra);
                primerPalabra = -1;
            };
        };
        return array;
    };

    function esSeparador(caracter) {
        let separadores = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?", "(", ")"];
        return separadores.includes(caracter);
    };
};
//tarea34();
/*
Desafío de programación #35. Cree una función para convertir un texto CSV en una matriz "bidimensional" 
*/
function tarea35() {
    const data = "John;Smith;954-000-0000\nMich;Tiger;305-000-0000\nMonique;Vasquez;103-000-0000",
        ar = csvToArray(data);

    console.log(JSON.stringify(ar)); //metodo que convierte un objeto o valor en una cadena JSON. remplazando opcionalmente valores si se especifica una funciion de reemplazo o incluyendo solo las propiedades especificadas en una matriz de reemplazo. JSON.stringify(valor,remplazo(opcional), espacio separador(opcional))


    function csvToArray(data) {
        let arLines = data.split("\n"); // retorna u8n array que divide un string en una lista ordenada de subcadenas. se divide con el primer parametro de se le proporciona, y el segundo parametro es para poner un limite maximo de elementos en el array
        for (let i = 0; i < arLines.length; i++) {
            let arLine = arLines[i].split(";");
            arLines[i] = arLine;
        };
        return arLines;
    };
};
//tarea35();
/*
Desafío de programación #36. Cree una función que convierta una cadena en una matriz de caracteres
*/
function tarea36() {

    console.log(getChars("I like JavaScript"));

    function getChars(s) {
        return Array.from(s); //crea un nuevo array a partir de un objeto iterable como un "string"
    };
};
//tarea36();
/*
Desafío de programación #37. Cree una función que convierta una cadena en una matriz que contenga los códigos ASCII de cada carácter
*/
function tarea37() {

    console.log(getCharCodes("I like JavaScript"));

    function getCharCodes(s) {
        let ar = [];
        for (let i = 0; i < s.length; i++) {
            let code = s.charCodeAt(i); //devuelve un numero 0 y que 65535 representa la unidad de codigo UTF-16 en el indice dado
            ar.push(code);
        };
        return ar;
    };
};
//tarea37();
/*
Desafío de programación #38. Cree una función que convierta una matriz que contenga códigos ASCII en una cadena
*/
function tarea38() {
    'use strict'; // muestra errores cuando se utilkiza un metodo no recomendado

    console.log(codesToString([73, 32, 108, 105, 107, 101, 32, 74, 97, 118, 97, 83, 99, 114, 105, 112, 116]));

    function codesToString(ar) {
        return String.fromCharCode(...ar); //devuelve una cadena creada a partir de la secuencia especificada de unidades de codigo UTF-16
        // ...ar, se llama parametro descanso, permite que una funcion acepte un numero indifido de argumentos como una matriz
    };

};
//tarea38();
/*
Desafío de programación #39. Implementar el cifrado César
*/
function tarea39() {
    const text = "I LOVE JAVASCRIPT",
        textEnc = encrypt(text, 13),
        textDec = decrypt(textEnc, 13);

    console.log(text);
    console.log(textEnc);
    console.log(textDec);

    // Descifrar un mensaje usando la misma función de cifrado ... pero usando la inversa de la clave (por ejemplo, rotar en la otra dirección)
    function decrypt(msg, key) {
        return encrypt(msg, key * -1);
    }

    // La función implementará Caesar Cipher para encriptar desencriptar el mensaje cambiando las letras del mensaje según la clave
    function encrypt(msg, key) {
        let encMsg = "";

        for (let i = 0; i < msg.length; i++) {
            let code = msg.charCodeAt(i);

            // Cifre solo letras en el intervalo 'A' ... 'Z'
            if (code >= 65 && code <= 65 + 26 - 1) {
                code -= 65;
                code = mod(code + key, 26);
                code += 65;
            }

            encMsg += String.fromCharCode(code); //devuelve una cadena mediante el uso de una secuencia de valores Unicode especifica
        }

        return encMsg;
    }


    // Función de módulo: n mod p
    function mod(n, p) {
        if (n < 0)
            n = p - Math.abs(n) % p; //este metodo retorna el valor absoluto. siempre es positivo el numero. siempre es 0 si es vacio o null. y NaN si es un array, string o undefined 

        return n % p;
    }

}
//tarea39() // volver a ver este
/*
Desafío de programación #40. Implementar el algoritmo de clasificación de burbujas para una matriz de números
*/
function tarea40() {
    const ar = [23, 1000, 1, -1, 8, 3];
    console.log(ar);
    bubbleSort(ar);
    console.log(ar);

    function bubbleSort(ar) {
        let shouldSort = true,
            length = ar.length;

        while (shouldSort) {
            shouldSort = false;
            length--;
            for (let i = 0; i < length; i++) {
                let a = ar[i];
                if (a > ar[i + 1]) {
                    ar[i] = ar[i + 1];
                    ar[i + 1] = a;
                    shouldSort = true;
                };
            };
        };
    };
};
//tarea40(); // volver a ver este
/*
Desafío de programación #41. Cree una función para calcular la distancia entre dos puntos definidos por sus coordenadas x, y
*/
function tarea41() {
    console.log(getDistance(100, 100, 400, 300));

    function getDistance(x1, y1, x2, y2) {
        const l1 = x2 - x1,
            l2 = y2 - y1;

        return Math.sqrt(l1 * l1 + l2 * l2); //retorna la raiz cuadrada del elemento
        // lo este entre parentesis es la formula para sacar la distancia entre coordenadas con la raiz cuadrada
    };

};
//tarea41();
/*
Desafío de programación #42. Cree una función que devuelva un valor booleano que indique si dos círculos definidos por las coordenadas centrales y el radio se cruzan
*/
function tarea42() {
    console.log(collisionCircleCircle(200, 200, 100, 300, 300, 50));

    function collisionCircleCircle(circle1X, circle1Y, circle1R, circle2X, circle2Y, circle2R) {
        return getDistance(circle1X, circle1Y, circle2X, circle2Y) <= circle1R + circle2R;
    }

    // Calcule la distancia entre los dos puntos especificados
    function getDistance(x1, y1, x2, y2) {
        var l1 = x2 - x1;
        var l2 = y2 - y1;

        return Math.sqrt(l1 * l1 + l2 * l2);
    };
};
//tarea42();
/*
Desafío de programación 43. Cree una función que reciba una matriz bidimensional como argumento y un número y extraiga como una matriz unidimensional la columna especificada por el número
*/
function tarea43() {
    const ar = [
            ["John", 120],
            ["Jane", 115],
            ["Thomas", 123],
            ["Mel", 112],
            ["Charley", 122]
        ],
        numbers = extractCol(ar, 1);

    console.log(numbers);

    function extractCol(ar, colNo) {
        let arCol = [];

        for (let i = 0; i < ar.length; i++) {
            arCol.push(ar[i][colNo]);
        };
        return arCol;
    };
};
//tarea43();
/*
Desafío de programación #44. Cree una función que convierta una cadena que contenga un número binario en un número
*/
function tarea44() {
    console.log(binaryToNumber("11111111"));

    function binaryToNumber(sBinary) {
        return parseInt(sBinary, 2); //recibe un string y retorna un number
    };
};
//tarea44();
/*
Desafío de programación #45. Cree una función para calcular la suma de todos los números en una matriz irregular (la matriz contiene números u otras matrices de números en un número ilimitado de niveles)
*/
function tarea45() {
    const ar = [1, 2, [15, [23],
            [5, 12]
        ],
        [100]
    ];

    document.write(sumArray(ar));

    function sumArray(ar) {
        let sum = 0;

        for (let el of ar) { // el for of recorre el valor del array
            if (Array.isArray(el)) { // este metodo determina si el valor es un array. true o false
                el = sumArray(el);
            };
            sum += el;
        };
        return sum;
    };
};
//tarea45(); // volver a verla
/*
Desafío de programación #46-a. Encuentre el número máximo en una matriz irregular de números o una matriz de números
*/
function tarea46a() {
    // Solucion 1
    const ar = [2, 4, 10, [12, 4, [100, 99], 4],
            [3, 2, 99], 0
        ],
        max = findMax(ar);

    console.log("Max  = ", max);

    // Utilice la recursividad para encontrar el valor numérico máximo en una matriz de matrices
    function findMax(ar) {
        let max = -Infinity; // es un valor numerico que representa el infinito

        // Recorre todos los elementos de la matriz
        for (let i = 0; i < ar.length; i++) {
            let el = ar[i];
            // Si un elemento es de tipo matriz, invoque la misma función. Para averiguar el elemento máximo de ese subarreglo
            if (Array.isArray(el)) {
                el = findMax(el);
            };
            if (el > max) {
                max = el;
            };
        };
        return max;
    };
};
//tarea46a();
/*
Desafío de programación #46-b. Encuentre el número máximo en una matriz irregular de números o una matriz de números
*/
function tarea46b() {
    // Solucion 2
    let ar = [2, 4, 10, [12, 4, [100, 99], 4],
            [3, 2, 99], 0
        ],
        max = findMax(ar);
    console.log("Max  = ", max);
    // Use una pila para encontrar el valor numérico máximo en una matriz de matrices
    function findMax(arElements) {
        let max = -Infinity,
            //  Esta es la pila en la que se colocará la primera matriz y luego. Todas las demás submatrices que encontramos a medida que atravesamos una matriz
            arrays = [];

        arrays.push(arElements);
        // Bucle siempre que se agreguen matrices a la pila para su procesamiento
        while (arrays.length > 0) {
            // Extrae una matriz de la pila
            ar = arrays.pop();
            // ... y recorre sus elementos
            for (let i = 0; i < ar.length; i++) {
                let el = ar[i];
                // Si un elemento es de tipo matriz, lo agregaremos a la pila. Para ser procesado más tarde
                if (Array.isArray(el)) {
                    arrays.push(el);
                    continue;
                };
                if (el > max) {
                    max = el;
                };
            };
        };
        return max;
    };
};
//tarea46b();
/*
Desafío de programación #47. Copie en profundidad una matriz dentada con números u otras matrices en una nueva matriz
*/
function tarea47() {
    let ar1 = [2, 4, 10, [12, 4, [100, 99], 4],
            [3, 2, 99], 0
        ],
        ar2 = copyArray(ar1);

    console.log(ar2);

    function copyArray(ar) {
        let ar2 = [];
        for (let el of ar) {
            if (Array.isArray(el)) {
                el = copyArray(el);
            };
            ar2.push(el);
        };
        return ar2;
    };
};
//tarea47();
/*
Desafío de programación #48. Cree una función para devolver la (s) palabra (s) más larga (s) en una cadena
*/
function tarea48() {
    const text = "Crea a";

    console.log(getLongestWords(text));

    function getLongestWords(text) {
        let words = getWords(text),
            maxSize = 0,
            maxPositions = [];

        for (let i = 0; i < words.length; i++) {
            let currWordSize = words[i].length;

            if (currWordSize > maxSize) {
                maxSize = currWordSize;
                maxPositions = [i];
            } else if (currWordSize === maxSize) {
                maxPositions.push(i);
            };
        };
        return getElements(words, maxPositions);
    };
    // Obtenga solo los elementos de las posiciones especificadas de la matriz
    function getElements(ar, arPositions) {
        let arNew = [];

        for (let pos of arPositions) {
            arNew.push(ar[pos]);
        };
        return arNew;
    };
    // Devuelve una matriz con las palabras del texto especificado.
    function getWords(text) {
        let startWord = -1;
        let ar = [];

        for (let i = 0; i <= text.length; i++) {
            let c = i < text.length ? text[i] : " "; //condicion ternaria

            if (!isSeparator(c) && startWord < 0) {
                startWord = i;
            };
            if (isSeparator(c) && startWord >= 0) {
                let word = text.substring(startWord, i); //devuelve una parte de la cadena
                ar.push(word);
                startWord = -1;
            };
        };
        return ar;
    };

    function isSeparator(c) {
        let separators = [" ", "\t", "\n", "\r", ",", ";", ".", "!", "?", "(", ")"];
        return separators.includes(c); //determina si una matriz incluye un cierto valor entre sus entraas, devuelve true o false
    };
};
//tarea48(); // volver a ver
/*
Desafío de programación #49. Mezclar una variedad de cadenas
*/
function tarea49() {
    const ar = ["Shuffle", "an", "array", "of", "strings"];

    console.log(shuffleArray(ar));
    // Matriz aleatoria implementada con el algoritmo aleatorio de Fisher-Yates
    function shuffleArray(ar) {
        for (let i = ar.length - 1; i > 0; i--) {
            let j = randomInt(0, i - 1),
                t = ar[i];
            ar[i] = ar[j];
            ar[j] = t;
        };
        return ar;
    };
    // Obtenga un int aleatorio entre mínimo y máximo (ambos incluidos)
    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min; //floor = evalua un numero decimal y devuelve un numero entero. menor o igual. Math.random() =  devuelve un numero flotante pseuudoaleatorio entre 0 y menos de 1
    };
};
//tarea49();
/*
Desafío de programación #50. Cree una función que reciba n como argumento y devuelva una matriz de n números aleatorios únicos de 1 a n.
*/
function tarea50() {
    console.log(getRandomNumbers(10));

    function getRandomNumbers(n) {
        let ar = [];

        for (let i = 1; i <= n; i++) {
            ar.push(i);
        };
        shuffleArray(ar);
        return ar;
    };
    // Matriz aleatoria implementada con el algoritmo aleatorio de Fisher-Yates
    function shuffleArray(ar) {
        for (let i = ar.length - 1; i > 0; i--) {
            let j = randomInt(0, i - 1),
                t = ar[i];
            ar[i] = ar[j];
            ar[j] = t;
        };
        return ar;
    };
    // Obtenga un int aleatorio entre mínimo y máximo (ambos incluidos)
    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
};
//tarea50();
/*
Desafío de programación #51. Encuentra la cantidad de veces que un caracteres es usado dentro de una cadena. 
//Devuelve el resultado como una matriz de objetos. Cada objeto tiene 2 campos: carácter y número de ocurrencias.
*/
function tarea51() {
    const ar = getCharFrequency("Find the frequency of characters inside a string");
    console.log(JSON.stringify(ar)); //convierte un objeto en una cadena JSON, remplazando opcionalmente una funcion de remplazo u opcionalmente incluyendo solo las propiedades especificadas si se especifica una matriz de reemplazo
    function getCharFrequency(text) {
        var ar = [];
        for (let chr of text) { //crea una iteracion sobre objetos iterables
            updateFrequency(ar, chr);
        };
        return ar;
    };

    function updateFrequency(ar, chr) {
        for (let el of ar) {
            if (el.chr === chr) {
                el.count++;
            };
        };
        ar.push({ chr: chr, count: 1 });
    };
};
//tarea51();
/*
Desafío de programación #52. Calcule Fibonacci (500) con alta precisión (todos los decimales)
*/
function tarea52() {
    console.log(fibonacci(500));

    function fibonacci(n) {
        if (n === 0)
            return "0";
        if (n === 1)
            return "1";

        let n1 = "0",
            n2 = "1";

        for (let i = 2; i <= n; i++) {
            let sum = add(n1, n2);

            n1 = n2;
            n2 = sum;
        };
        return n2;
    };

    function add(sNumber1, sNumber2) {
        const maxSize = Math.max(sNumber1.length, sNumber2.length); //devulve el numero mayor

        const s1 = sNumber1.padStart(maxSize, "0"), //rellena una cadena con un valor dado
            s2 = sNumber2.padStart(maxSize, "0");

        let s = "",
            carry = 0;

        for (let i = maxSize - 1; i >= 0; i--) {
            let digit1 = parseInt(s1[i]),
                digit2 = parseInt(s2[i]),
                sum = digit1 + digit2 + carry,
                digitSum = sum % 10;
            carry = sum >= 10 ? 1 : 0; //condicional ternaria

            s = digitSum.toString() + s; //devuelve la URL completa
        };
        if (carry > 0)
            s = carry + s;
        return s;
    };
};
//tarea52(); //volver a ver. no entiendo que tiene que hacer
/*
Desafío de programación #53. ¡Calcula 70! con alta precisión (todos los decimales) (# 57 ejercicios son)
 */
function tarea53() {
    console.log(factorial(70));
    // Calcular factorial (n) ... usando cálculos con números grandes
    function factorial(n) {
        let prod = "1";

        for (let i = 2; i <= n; i++) {
            prod = mult(prod, i.toString());
        };
        return prod;
    };
    //Multiplica sNumber1 * sNumber2 
    // Cada número se proporciona como cadena
    function mult(sNumber1, sNumber2) {
        // Calcular resultados parciales de acuerdo con el algoritmo de multiplicación.
        let partialResults = [];

        for (let i = sNumber2.length - 1; i >= 0; i--) {
            let digit = parseInt(sNumber2[i]),

                partialResult = multDigit(sNumber1, digit);
            partialResult += "0".repeat(partialResults.length); //repite un fragmento de codigo
            partialResults.push(partialResult);
        };
        // Sumar resultados parciales para obtener el producto.
        let sum = "";

        for (let r of partialResults) {
            sum = add(sum, r);
        };
        return sum;
    };
    // Multiplica el número sNumber (como cadena) con un número de un solo dígito
    function multDigit(sNumber, digit) {
        let p = "",
            carry = 0;

        for (let i = sNumber.length - 1; i >= 0; i--) {
            const numberDigit = parseInt(sNumber[i]),

                prod = digit * numberDigit + carry,
                prodDigit = prod % 10;
            carry = Math.floor(prod / 10);

            p = prodDigit.toString() + p;
        };
        if (carry > 0)
            p = carry + p;
        return p;
    };

    function add(sNumber1, sNumber2) {
        const maxSize = Math.max(sNumber1.length, sNumber2.length),

            s1 = sNumber1.padStart(maxSize, "0"), //rellena la cadena actual con otra cadena(varias veces si es necesario) hasta alñcanzar la longitud deseada
            s2 = sNumber2.padStart(maxSize, "0");

        let s = "",
            carry = 0;
        for (let i = maxSize - 1; i >= 0; i--) {
            const digit1 = parseInt(s1[i]),
                digit2 = parseInt(s2[i]),

                sum = digit1 + digit2 + carry,
                digitSum = sum % 10;
            carry = sum >= 10 ? 1 : 0;

            s = digitSum.toString() + s;
        };
        if (carry > 0)
            s = carry + s;
        return s;
    };
};
//tarea53(); // no entiendo que tiene que hacer