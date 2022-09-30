// Nivel 3

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
    CSS describe como se ven los elementos HTML.

    Los archivos CSS consisten en "bloques de declaración". Cada bloque de
    declaración está compuesto de un "selector" y de un conjunto de reglas de estilo
    visuales. Una declaración se ve así:
    
    [selector] {
      nombre-de-estilo: valor;
      nombre-de-estilo: valor;
      nombre-de-estilo: valor;
    }

    Los selectores especifican sobre que elementos son aplicados los
    estilos visuales.

    Los selectores más básicos se refieren a los elementos mediante su nombre de etiqueta,
    se ven algo así:

    body {
      background-color: white;
    }

    Los selectores pueden también referirse a los elementos mediante su atributo
    de "clase", como esto:

    .settings {
      margin: 0;
    }

    o por su ID, así:

    #logo {
      text-align: center;
    }

    La lista de las propiedades de CSS es muy grande, podés leer más acá:
    https://www.w3.org/TR/CSS21/propidx.html

    No te preocupés, no hace falta recordar todo esto ahora mismo!
*/

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

     Podemos guardar elementos de la página en variables, al igual que como cualquier otro valor!
     De todas formas, fijate que un elemento de página es un objeto,
     el cual es un "tipo de referencia", así como los arrays (mirá el nivel 2).
     Eso quiere decir que se pueden cambiar los atributos y propiedades del elemento,
     pero no la variable en sí misma. Vas a ver esto en acción ahora mismo.
*/

const nuestroTwitter = document.querySelector('.twitter');
console.log(nuestroTwitter);

// TAREA: Ahora te toca a vos! — Obtené la etiqueta h1 de la página y guardala en una variable
//       variable llamada nuestroTitulo.
//       Utilizá console.log para ver lo que obtuviste!

const nuestroTitulo = document.querySelector('h1');
console.log(nuestroTitulo);
console.log(nuestroTitulo.innerText);
nuestroTitulo.innerText = 'Hola r/Argentina programa';

/*
    Obteniendo elementos similares.
    ========================

    También podemos obtener todos los elementos con la misma etiqueta. En nuestro
    pie de página tenemos una lista desordenada (<ul>), con tres elementos de lista (<li>) adentro.
    Obtengamoslos todos con un array de los elementos de la página. Cuando querramos obtener multiples elementos,
    podemos utilizar el método '.querySelectorAll', el cual nos dará una lista con las coincidencias.

    Ejemplo:

    Esto obtendrá todos los <li> de la página.
    const mediaLinks = document.querySelectorAll('li');
*/

// TAREA: Obtené todos los elementos <li> de la página en una variable llamada mediaLinks.

const mediaLinks = document.querySelectorAll('li');
console.log(mediaLinks);

for (let i = 0; i < mediaLinks.length; i++) {
    console.log(mediaLinks[i].innerText);
    mediaLinks[i].innerText = 'Hola!';
}

// TAREA: Ahora utilizá console.log para ver la cantidad de
// elementos li que hay con mediaLinks.length

// TAREA: ¿Te acordás de los bucles del nivel 2? Usando lo que sabés de ellos, realizá iteraciones
//      sobre cada item de mediaLinks y mostralos en pantalla con console.log

for (let i = 0; i < mediaLinks.length; i++) {
    console.log(mediaLinks[i]);
}

let contador = 0;
for (let i = 0; i < mediaLinks.length; i++) {
    console.log((contador += mediaLinks[i].textContent));
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

console.log(titulo.textContent); //Este siempre nos va mostrar o dar solo el contenido de texto que halla en ese elemento//Es conveniente usar este
console.log(titulo.innerText); //En este solo vamos aver el texto qeu se este mostrando en la pagina//calcula que elementos estan visibles y si no estan visibles no nos da el texto
console.log(titulo.innerHTML); // este nos da el pedaso de codigo de html que esta dentro del elemento que pido

/*
    Editar el contenido de la página
    ====================

    Podemos simplemente cambiar el contenido de las étiquetas utilizando la propiedad que 
    vimos recién, '.textContent'.

    Ejemplo:

    nuestroTwitter.textContent = '@ButenkoMe';
    console.log(nuestroTwitter.textContent);
     Adiviná que es lo que vamos a ver en la página y en la consola!
*/

// TAREA: Hagamos un nuevo título! Cambiá el contenido de nuestro 'h1' y ponele lo que quieras.

//En algunso casos en las tareas se pide que hagamso esto:

const nombreUsuario = prompt('Cómo te llamas?');
nuestroTitulo.textContent = 'Hola! ' + nombreUsuario;

/*
    Editando atributos
    ==================
    
    También podemos cambiar y establecer atributos en nuestros elementos.

    Ejemplo:

    const nuestroTwitter = document.querySelector('.twitter');
    ourTwitter.id = "sorpresa";
*/

// TAREA: Actualizá el valor del atributo 'src' de nuestra etiqueta 'img' a "img/kittens.jpeg".

document.querySelector('img').src = 'img/kittens.jpeg';

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

nuestroTitulo.style.backgroundColor = 'blue';
nuestroTitulo.style.fontSize = '150px';

/*
   Creando nuevos nodos (Elementos)
    =============================

    El objeto "document" también nos da maneras de crear nodos desde cero.

    let x = document.createElement('div'); // crea un nuevo elemento llamado 'div'.//lo creamos en memoria
    document.createTextNode('foobar'); // crea un nuevo texto que contiene 'foobar'
    existingNode.appendChild(newNode); // agrega un newNode al final de existingNode.

    Ejemplo:

    const nodoPagina = document.querySelector('body');// <body>...........</body>
    const nuevoParrafo = document.createElement('p');//<p></p>
    const textoParrafo = document.createTextNode('Yeeee!');//"Siiii"
    nuevoParrafo.appendChild(textoParrafo);<p>Siiiiii</p>
    nodoPagina.appendChild(nuevoParrafo);///<body>.........<p>Siiiii</p></body>
*/

// Tarea: Todavía seguís teniendo a los gatitos en tu pantalla? A mí me gusta el logo y los gatitos.
//       Creá una nueva imagen con nuestro logo como fuente, y ponela
//       en nuestra cabecera.
//
// P.S. También les podés dar estilos al nuevo nodo que creaste.

const nodoImagen = document.createElement('img'); //<img>
nodoImagen.src = 'img/woman_bw.jpg'; //hasata que no lo pongamos en un nodo que ya exite nova pasar nada
document.querySelector('header').appendChild(nodoImagen);

/* 
<header>
    <h1 id="titulo">Hola!</h1>
    <h2 class="importante">Escribamos un poco de código el día de hoy!</h2>
    <img src="img/woman_bw.jpg"
</header>
ESto lo vamos a necesitar en la clase 6

*/

////////////////////////////////////////////////////////////////////////////
// ¡Felicidades! ¡Has terminado el Nivel 3 de JavaScript Básico!          //
// Levántate, estira las piernas y celebra tu logro.                      //
// ¡Creo que esto amerita un festejo!                                     //
////////////////////////////////////////////////////////////////////////////

const botonIngreso =
    document.querySelector('#Ingresar'); /* En este caso pedimos el elemento que tiene el id ingresar */
/* evento onclick, es una propiedad que espera una funcion*/
/* Entonces lo que tenemos que ahcer es declarar una funcion anonima */
botonIngreso.onclick = function () {
    /* Entonces aca vamosd a decir que va pasar cuando hagamos un click */
    const edadUsuario = Number(document.querySelector('#edad-usuario').value);
    /* si lo queremos validad hacemos */
    let textoresultado;
    if (edadUsuario >= 18) {
        textoresultado = 'Podés ingresar';
    } else {
        textoresultado = 'No podés ingresar';
    }
    document.querySelector('#resultado').innerText = textoresultado;
    return false;
};

/* Aveces lo que se ahce es agregar un signo $ para dejar en claro quee es un elemento de html y no un avariable comun y corriente*/

/* ahora lo que podemos hacer e spreguntar por nombre y edad para ver si alguien puede entrar o no al bar */
