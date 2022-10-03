// Nivel 3


/////////////
///CLASE 5///
/////////////

//Estos links son teoría sobre Git, GitHub y GitHub Desktop:

// https://github.com/r-argentina-programa/traducciones/blob/master/src/github.md

// http://tomasdelvechio.github.io/old/440/

// Este último es sobre renderización de navegadores:

// https://github.com/r-argentina-programa/traducciones/blob/master/src/renderizacion-navegadores.md

///////////////////////////////// Parametros por default

// Podemos asignar a una función un parametro por default en caso de no recibir
// ningún valor, por ejemplo:

function preguntarColorPreferido(color = 'azul') {
    console.log('Mi color preferido es ' + color)
}

// Entonces en caso de no ingresar ningún 'color' el parametro por default será
// 'azul' y en la consola dirá 'Mi color preferido es azul'


///////////////////////////////// Operador ternario


// Es como if-else pero en una sola línea. Primero tenemos la condición y luego un
// signo de interrogación ? seguido de lo que ocurre al cumplirse dicha condición,
// después los 2 puntos : y a su derecha lo que ocurre de no cumplirse la misma
// condición. Por ejemplo:

function verificarEdadEntrada(edad) {
    edad >= 18 ? console.log('Podes ingresar') : console.log('No podes ingresar')
}

///////////////////////////////// ++variable o variable++

// A estos conceptos los vemos con el siguiente ejemplo:

function testClase5() {
    let x = 0;
    let y = ++x; //aca se suma 1 al valor de x y luego se asigna el valor a x
    let z = x++; //aca se asigna el valor a x y luego se le suma 1
}

testClase5()

///////////////////////////////// Expresiones de función (Function Expressions)

// Nosotros podemos asignarle una función a una variable, por ejemplo:

let sumar = function (n1, n2) {
    return console.log(
        `El resultado es ${n1 + n2}`
    )
}

// Esta variable llamada sumar tiene type "function", porque le hemos asignado una
// función y eso nos permite ejecutar esta variable llamandola del siguiente modo:

sumar(10, 20)

// Ahora, cual es la utilidad de esta funcionalidad de JavaScript

let restar = function (n1, n2) {
    console.log(
        n1 - n2
    )
}

function tareaOperador (funcionOperador, numero1, numero2){
    console.log(funcionOperador(numero1,numero2))
}
// Entonces ahora funcionOperador es un parametro que espera una función cuyos
// parametros son n1 y n2.

// La función tareaOperador espera una función, numero1 y numero2.

tareaOperador(restar, 100, 70)

// Sería incorrecto llamar a la función de esta forma:
// tareaOperador(restar, 100, 70)

///////////////////////
/////Minuto 44:19//////
///////////////////////

//////////////////// Git, GitHub y GitHub Desktop

// Para escribir correctamente un mensaje de commit, el título debe estar en
// imperativo y en la descripción debemos aclarar porque estamos haciendo
// dichos cambios y no como ya que esto se puede ver directamente en las lineas
// de código.

// Para trabajar sobre las distintas funcionalidades, vamos creando diferentes ramas
// o branches.

// En el ejemplo creamos el repositorio "hola-mundo" y trabajando dentro del branch
// "master" que sería el principal, creamos un archivo "hola-mundo.txt" a modo de 
// ejemplo. Luego cuando se desea agregar una nueva funcionalidad a nuestra pagina
// web, ahí creamos un nuevo "branch" y comenzamos a trabajar sobre el mismo
// en las funcionalidades que querramos agregar y una vez las tenemos listas, con
// todos los commits, hacemos un pull request para unir el branch a master.

// Podemos crear un pedacito de codigo HTML con CTRL + ESPACIO.

// Cuando publicamos el branch en Github.com, se dice en el ambiente de la
// programación que "pusheamos" el branch, es un termino que usa fabricio en la
// clase 5.

// Luego de publicar este branch para poder incorporar los cambios a master
// debemos hacer un "pull request".

// Si en el pull request esta todo bien y ya fue revisado correctamente, hacemos un
// "Merge pull request" y unimos todo al Branch Master.



/*
    Introducción
    ============

    Bieeeeen, has llegado lejos en tan poco tiempo!

    Pero todavía tenemos más cosas para vos. Antes de comenzar, abrí index.html, y
    reemplazá nuestro script de nivel2.js al que vamos a utilizar ahora, — nivel3.js.

    TIP: Si querés utilizar multiples archivos .js, simplemente
    agregá más etiquetas <script>.
*/

/*
    Hablemos un poco más de HTML, CSS y de como podemos interactuar con ellos
    en JavaScript.


    Hypertext Markup Language (HTML)
    --------------------------------
    Como te habrás dado cuenta, HTML está dividido en elementos que se ven algo así:

    <header></header>
    <p></p>
    <img />

    A estos elementos los llamamos "tags". Cada elemento de la página tiene un tag que abre y otro que
    cierra. (NOTA: Algunos tags, como <img />, no necesitan ser
    cerrados con otro tag.)

    La etiqueta que engloba a todas las demás en un archivo HTML es <html>.

    Dentro de la etiqueta <html> encontrarás un tag <head> y un tag <body>.

    En <head> metemos los metadatos, el título de la página y los links a los
    archivos CSS. La etiqueta <body> contiene nuestro contenido.

    Para una lista completa de las etiquetas HTML, podés mirar esta lista:
    http://htmldog.com/references/html/tags/

    En HTML, los tags pueden contener atributos:
    <div class="opciones"></div>

    Esta etiqueta div contiene un atributo llamado "class", el cual tiene como valor: "opciones".


    Cascading Style Sheets (CSS)
    ----------------------------
    Se llama así porque las cosas se aplican "en cascada" donde lo mas específico pisa
    a lo más general. Por ejemplo:

    html {
        background-color: black;
    }

    body {
        background-color: blue;
    }

    footer {
        background-color: green;
    }

    Entonces todo el HTML será con fondo rojo excepto el body que tendrá fondo azul
    y dentro del body el footer tendrá fondo verde.

    CSS describe como se ven los elementos HTML.

    Los archivos CSS consisten en "bloques de declaración". Cada bloque de
    declaración está compuesto de un "selector"(concepto muy importante) y de un conjunto de reglas de estilo
    visuales. Una declaración se ve así:
    
    [selector] {
      nombre-de-estilo: valor;
      nombre-de-estilo: valor;
      nombre-de-estilo: valor;
    }

    Los selectores especifican sobre que elementos son aplicados los
    estilos visuales.

    Cuando queremos seleccionar todos los elementos de nuestra página usamos
    el asterisco:

    * {
        background-color: blue;
    }

    Los selectores más básicos se refieren a los elementos mediante su nombre de etiqueta,
    se ven algo así:

    body {
      background-color: white;
    }

    h1 {
        font-size: 20px;
    }

    Los selectores pueden también referirse a los elementos mediante su atributo
    de "clase", como esto:

    En el HTML vemos este div con clase "settings"
                 [
    <div class="settings">
    </div>
                ]

    En el archivo CSS lo modificaríamos así:
    .settings {
      margin: 0;
    }

    o por su ID, así:

    #logo {
      text-align: center;
    }

    Si tenemos 2 atributos con la misma class pero diferentes características,
    se van a terminar mezclando, por ejemplo:

    .televisores {
        font-size: 20px
    }

    .televisores {
        background-color: red
    }

    ----------------------------------------------------------------------------

    Como dijimos siempre ganará el atributo mas específico, por ejemplo:

    h1 {
        background-color: white
    }

    .h1 {
        background-color: blue
    }

    En este caso es mas específico el atributo ".h1" ya que es una clase.

    Los órdenes de especificidad de mas a menos específico son:

    * ID
    * Class
    * Selector (h1,h2,body,etc.)

    La lista de las propiedades de CSS es muy grande, podés leer más acá:
    https://www.w3.org/TR/CSS21/propidx.html

    No te preocupés, no hace falta recordar todo esto ahora mismo!
*/
/////////////////////////////////
//////////Minuto 2:03:26/////////
/////////////////////////////////



/*
    Uff, muchas cosas nuevas! Volvamos a JavaScript y veamos como podemos
    interactuar con HTML.
*/


/*
    Elementos de Acceso
    ==================

    Document Object Model (DOM)
    ---------------------------
    El DOM es la representación en JavaScript del elemento HTML que está siendo
    utilizado. EL DOM está disponible bajo una variable global especial llamada
    "document". Podemos obtener nodos específicos (elementos de página) con el
    metodo DOM: '.querySelector'.

    Obtengamos nuestro link de Twitter desde la página.

    Ejemplo:

    const nuestroTwitter = document.querySelector('.twitter');

    // Podemos guardar elementos de la página en variables, al igual que como cualquier otro valor!
    // De todas formas, fijate que un elemento de página es un objeto,
    // el cual es un "tipo de referencia", así como los arrays (mirá el nivel 2).
    // Eso quiere decir que se pueden cambiar los atributos y propiedades del elemento,
    // pero no la variable en sí misma. Vas a ver esto en acción ahora mismo.
*/

// TAREA: Ahora te toca a vos! — Obtené la etiqueta h1 de la página y guardala en una variable
//       variable llamada nuestroTitulo.
//       Utilizá console.log para ver lo que obtuviste!


let nuestroTitulo = document.querySelector('h1').textContent

console.log(nuestroTitulo)




/*
    Obteniendo elementos similares.
    ========================

    También podemos obtener todos los elementos con la misma etiqueta. En nuestro
    pie de página tenemos una lista desordenada (<ul>), con tres elementos de lista (<li>) adentro.
    Obtengamoslos todos con un array de los elementos de la página. Cuando querramos obtener multiples elementos,
    podemos utilizar el método '.querySelectorAll', el cual nos dará una lista con las coincidencias.

    Ejemplo:

    // Esto obtendrá todos los <li> de la página.
    const mediaLinks = document.querySelectorAll('li');
*/

// TAREA: Obtené todos los elementos <li> de la página en una variable llamada mediaLinks.


let mediaLinks = document.querySelectorAll('li')



// TAREA: Ahora utilizá console.log para ver la cantidad de 
// elementos li que hay con mediaLinks.length

//console.log(mediaLinks)


// TAREA: ¿Te acordás de los bucles del nivel 2? Usando lo que sabés de ellos, realizá iteraciones
//      sobre cada item de mediaLinks y mostralos en pantalla con console.log


for (let i = 0; i < (mediaLinks.length - 1); i++) {
    console.log(mediaLinks[i])
}



/*
    Propiedades de los elementos
    ==================

    Ok, hasta acá todo bien. Peeeroo, ¿que pasa si queremos obtener SOLO el texto
    de nuestra etiqueta 'h1'?
    Los elementos de página tienen una propiedad para esto: '.textContent'.

    Ejemplo:

    nuestroTwitter.textContent;
    // Obtendremos el texto: 'Twitter: @MusesCodeJSSyd @MusesCodeJSMelb @MCJSHobart @MCJSPerth @BrisMuses'.
*/

// TAREA: Obtené el contenido de nuestro elemento 'h1'
// y utilizá console.log para mostrarlo.






/*
    Editar el contenido de la página
    ====================

    Podemos simplemente cambiar el contenido de las étiquetas utilizando la propiedad que
    vimos recién, '.textContent'.

    Ejemplo:

    nuestroTwitter.textContent = '@ButenkoMe';
    console.log(nuestroTwitter.textContent);
    // Adiviná que es lo que vamos a ver en la página y en la consola!
*/

// TAREA: Hagamos un nuevo título! Cambiá el contenido de nuestro 'h1' y ponele lo que quieras.





/*
    Editando atributos
    ==================

    También podemos cambiar y establecer atributos en nuestros elementos.

    Ejemplo:

    const nuestroTwitter = document.querySelector('.twitter');
    ourTwitter.id = "sorpresa";
*/

// TAREA: Actualizá el valor del atributo 'src' de nuestra etiqueta 'img' a "img/kittens.jpeg".






/*
    Editando estilos
    ==============

    Cambiemos algunos estilos. Los elementos de página tienen una propiedad '.style'.
    Podemos asignarle estilos a esta propiedad utilizando los mismos nombres que en
    los archivos CSS.

    (Si una propiedad tiene '-' en su nombre, como — font-size —, entonces
    el guión será eliminado y las siguiente palabra comenzara con una letra mayúscula, y pasará
    a ser fontSize).

    Ejemplo:

    const nuestroTwitter = document.querySelector('.twitter');
    nuestroTwitter.style.backgroundColor = 'white';
*/

// Tarea: Obtené cualquier elemento de la página y cambiale algunos estilos.






/*
   Creando nuevos nodos (Elementos)
    =============================

    El objeto "document" también nos da maneras de crear nodos desde cero.

    document.createElement('div'); // crea un nuevo elemento llamado 'div'.
    document.createTextNode('foobar'); // crea un nuevo texto que contiene 'foobar'
    existingNode.appendChild(newNode); // agrega un newNode al final de existingNode.

    Ejemplo:

    const nodoPagina = document.querySelector('body');
    const nuevoParrafo = document.createElement('p');
    const textoParrafo = document.createTextNode('Yeeee!');
    nuevoParrafo.appendChild(textoParrafo);
    nodoPagina.appendChild(nuevoParrafo);
*/

// Tarea: Todavía seguís teniendo a los gatitos en tu pantalla? A mí me gusta el logo y los gatitos.
//       Creá una nueva imagen con nuestro logo como fuente, y ponela
//       en nuestra cabecera.
//
// P.S. También les podés dar estilos al nuevo nodo que creaste.






////////////////////////////////////////////////////////////////////////////
// ¡Felicidades! ¡Has terminado el Nivel 3 de JavaScript Básico!          //
// Levántate, estira las piernas y celebra tu logro.                      //
// ¡Creo que esto amerita un festejo!                                     //
////////////////////////////////////////////////////////////////////////////
