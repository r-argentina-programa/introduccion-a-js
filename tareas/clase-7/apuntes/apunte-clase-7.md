# ¿Que es un servidor?

Por ejemplo:

Si fueramos a google.com
vamos a ir a la parte de networks que es la parte de redes.

Cuando nosotros vamos a google.com hay todo un proceso que transforma esa direccion web a una direccion IP, que hace que por ejemplo una computadora de google
digamos que esats conectada a internet entonces esa computadora se llama por ejemplo 172.217.160 ese es el nombre de la computadora de google.com.
Entonces esa computadora tiene un programa corriendo que es el servidor weeb.

¿como funcionan los servidores web?
Los servidores web escuchan algo que se llama un puerto.
Una maquina tiene 65.535 puertos, los cuales algunos por lo general estan reservados para cosas especificas por ejemplo:
si nos fijamos el protocolo que google esta usando HTTPS la S es de secured.
Esto tiene que ver con certificados de SSL y algunas que nadie puede esnifear su coneccion y ver que datos se estan mandado, por que esos datos estan encriptados

LA estructura de una URL es
dominio => y el puerto
En este caso el puerto de google es por default de HTTPS que es el 443

Entonces si vamos a google.com:443 es lo mismo que ir a google.com

¿Que debemos saber del servidor?
Lo que debemos saber del servidor es que empieza y esta escuchando en un puerto y solo puede haber un servidor escuchando en un puerto de una maquina.

El servidor web escucha en el puerto 80
¿Que es lo que escucha?
escucha concecciones que entran

-El PROTOCOLO

Si nosotros corremos algo en nuestra maquina por ejemplo
File// y el file que nosotros queremos traer.
Esto no es HTTP, esto es un archivo,entonces esto no necesita de un servidor, esto lo unico que hace, es traer las cosas que hay en la computadora y ya.
El navegador lo que hace es leer lo que tenemos dentro de ese archivo, lo interpreta y les muestra la pagina.

El codigo esta en index.html

- cuando tenemos un servidor de por medio es un poco distinto

Por ejemplo cuando vamos a google.com siempre la interaccion es la misma, y esto es un patron que se repite en todo lo que es programacion y sistema.

Ustedes tienen un REQUEST despues tenemos un procesamiento y luego tenemos un RESPONCE

es decir:

Tenemos una petecion, un procesamiento y una devolucion o respuesta de ese procesamiento.

Algo asi seria basicamente lo que hacen las funciones, lo que hacen las funciones de javascript, les pasan parametros sobre el input, hacen un procesamiento que es el cuerpo de la funcion y despues con el return de dan un output al que lo llamo.

Entonces esto es lo que por lo general los sistemas hacen
entrada => procesamiento y salida

Entonces con los request de los servidores no es distinto

Le pedimos a un servidor que les de una pagina web , el servidor hace algun tipo de procesamiento y despues les devuelve un resultado.

\*Si hay un servidor, por que toma las peticiones y sirve las respuestas, la contra parte de eso es el cliente es el que hace las peticiones he interpeta las respuestas.
Entonces en este caso el cliente es el Browser, el navegador en este caso chrome

Entonces el cliente le hace una peticion a google, google procesa, les da una respuesta el navegador que es el cliente procesa esa respuesta y les muestra la pagina web.

Existen diferentes tipos de servidores
-Servidores web
-servidores de bases de datos
-servidores de archivos

SERVIDOR = le hacemos una peticion, el servidor procesa esa peticion y les da una respuesta, despues esa respuesta es procesada por el navegador

¿Como funciona una formulario?

Es un concepto que nosotros ya entendemos por ejemplo hacer algun tipo de tramite, nos dan un formulario para completar datos y despues hay alguien que interpreta esos datos y nos da una respuesta.

En la web es mas o menos lo mismo nada mas que, como es digital, siempre tiene como funcionalidades aumentadas

Las validaciones pueden ser del lado del cliente y del lado del servidor

Del lado del cliente para que le sirve?
Entonces tenemos que pensar esto:
Nosotros hoy vivimos en un mundo donde internet esta en todos lados y cualquier sitio web tew pone imagenes que pesan 2 megas y no pasa anda por que tenemos internet ilimitado.

\*- La validacion de los inputs son esenciales para cualquier formulario web, ya que ayuda a que el visitante envie losm datos correctos.
Sirven tanto por cuestiones de seguridad, como cuestiones de usabilidad

¿Entonces cual es la onda?

Cuando nosotros le pedimos a un servidor que nos mande una pagina web, si esa pagina web tiene una sola letra, supongamos que pesa 1 bi, si esa pagina web tiene muchisimos elementos de HTML como por ejemplo 111 lineas de HTML, esto tiene un peso.

por ejemplo:
si ingresamos en el input cualquier letra, o cualquier cosa y le damos a siguiente, esto tiene que ir a un servidor, el servidor me va decir que ingrese datos incorrectos y despues va a volver a cargar la paGINA ESTA Y decir que ingrese datos incorrectos, es decir que cada vez que yo intento mandar el formulario y por mas que tenga un error, me esta comiendo 1,5 kb, cada vez que le mando al servidor y vuelve, me come 1,5 kb de esa pagina

Entonces en vez de eso, una tecnica que se usa es hacer las validaciones del lado del cliente
¿por que hacemos las validaciones ?
al hacert las validaciones del lado del cliente, podemos prevenir directamente que se envie un formulario, si no tiene los datos que ustedes ya saben que van a necesitar
por ejemplo si alguien pone un nombre vacio y hace click en enviar, ustedes ya pueden prevenir directamente con javascript que ese formulario no se envie, en vez de enviar el formulario, que pase un tiempo mientras analizan los datos y cuando vuelve les diga :

aaaaa no mira, te olvidaste del nombre y otra vez se volvieron a bajar todos estos datos.

Pueden fijarse que le ingresen datos malisiosos en el formulario

\*- Tambien podemos pensarlo desde el lado de la usabilidad, en hacerle la vida mas facil al cliente por que no es solo el hecho de que tarde en volver los datos y le coma el ancho de banda , si no que tambien es un garron completar todo un formulario apretar enviar, esperar un rato, y cuando vuelva la informacion, te diga, aaaa no mira, te falto un dato y vos decis y por que no me lo dijiste antes???

\*- tambien se puede validad formularios con html

VALIDACION DEL LADO DEL SERVIDOR:

No alcanza solo con hacer validaciones del lado del cliente

¿Pero por que pasa esto?

Por que puede ser que nosotros vayamos al navegador y desabilitemos javascript, y entonces todo el codigo que tenemos escriot para validar cosas, para hacer que las cosas funcionen lindas, dejan de funcionar y el tipo te puede mandar el formulario de todas formas, entonces estan expuestos, si no tenemos validacion del lado del servidor, estamos expuestos a que por ejemplo , nos rompan el sistema, que les ingresen datos que no eran validos

Entonces la validaciones se hacen de los dos lados, tanto del lado del cliente como el lado del servidor

hasta incluso un usuario malisioso puede hacer un llamado HTTP a su servidor sin usar un browser

Para validar nuestro formulario, vamos a tener que hacer lo siguiente:

1. Obtener cada valor del formulario
2. Hacer validaciones individuales, por ejemplo:

   - no vacío
   - al menos 2 caracteres
   - máximo de 250 caracteres
   - sólo letras
   - sólo números
   - letras y números

3. Validar el formulario cuando lo queramos mandar
4. CSS:
   - Mostrar un estilo de error en los campos que tengan problemas
   - Mostrar un mensaje de error en los campos que tengan problemas

# 1.Obtener el valor de un formulario

    Además de `document.querySelector()`, también se puede usar el nombre
    del formulario para acceder a sus campos.

const name = document.formulario.nombre.value;

otra forma de seleccionar elementos que tengan un atributo en particular cons CSS es asi

document.querySelector('[name]');

document.querySelector('[name=nombre]');

\*- Entonces aca lo que estamos diciendo es dame cualquier elemento que tenga un atributo name con valor nombre

Esto tambien funciona en CSS

Se empieza a complicar en los radios button, son botones que podes elegir una opcion o la otra.

Si vemos el codigo y nos fijamos

<input type="radio" value="muy_bueno" name="comportamiento"> Muy bueno
<input type="radio" value="bueno" name="comportamiento"> Bueno
<input type="radio" value="maso" name="comportamiento" checked> Mas o menos.</p>

son input de tipo radio

¿ que es lo que hace que cuando le hacemos click se seleccionen solo estas 3 opciones?

bueno esto pasa por que tienen el mismo name , se va seleccionar una o la otra y nunca a haber 2 seleccionadas. Si le cambiamos el name y lo recargamos se van a seleccionar muchas a la vez
los tipos de radio se agrupan por name

Aca ya se pone complejo por que por ejemplo podemos decir dame todos los que tengan name comportamiento

document.querySelectorAll('[name=comportamiento]')

y nos va devolver

NodeList(3)[input,input,input]

Entonces ahora deberiamos recorrer cada uno de los 3 input y fijarse cual esta chequedado

entonces como esto es un problema muy frecuente existe otra forma en la que nosotros lo podemos hacer, que es la siguiente

tenemos 3 inputs pero a simple vista nosotros nos sabemos cual de estos 3 inputs esat chequeado, si yo no estuviera biendo los inputs chequeados, pero mirando a simple vista nosotros no tenemos una linea que nos diga , noo mira el que esta chequeado es bueno con el querySelector.
Entonces es ves de hacer eso vamos a usar otra forma

¿Que otra forma vamos a usar?

usaremos

document.formulario que es el nombre del formulario, que si nos fijamos este formulario tiene name = formulario

entonces decimos

document.querySelector('#carta-a-santa').comportamiento

entonces si nos fijamos

nos da

RadioNodeList(3)[input,input,input, value: "bueno"]

si le decimos

document.querySelector('#carta-a-santa').comportamiento.value
nos da directamente el que esta sdeleccionado

'muy_bueno'

# Esto es una propiedad que tiene javaScript que basicamente lo que hace es analizar lo que hay en el formulario y te dice Bueno si vos tenes un formulario podes hacer formulario.elnombre de algun elemento que se encuentre

Para agarrar el formulario
document.querySelector('#carta-a-santa')

tambien podemos hacer

document.y el nombre del formulario

document.formulario

y los 2 hacen referencia a lo mismo

a uno lo estamos agarrando por el ID y el otro por nombre del formulario asi a lo capo

document.forms['carta-a-santa']

Existen muchas formas de agarrar formularios

Los inputs tienen nombre de comportamiento por que hacen referencia a como fue tu comportamiento

"muy bueno" "bueno" o "mas o menos"

Si hacemos

document.querySelectorAll('[name = comportamiento]')

me tira

NodeList(3)[input, input,input]

si hacemos

document.querySelectorAll('[name = comportamiento]')

Pero esto no me dice cual esat chequeado, para hacer esto lo que hace debemos hacer es

document.querySelectorAll('[name = comportamiento]')[1].checked
y esto me dice true

si preguntamos por el primero

document.querySelectorAll('[name = comportamiento]')[0].checked

me dice false

para sasber si va ser el 0,1,2,3 tendriamos que hacer un for

En vez de hacer eso lo que nos ofrece JavaScript es por que no agarras directamente el formulario.

document.querySelector('#carta-a-santa').comportamiento

RadioNodeList(3)[input,input,input, value: "bueno"]

pero ademas viene con una propiedad extra que es

document.querySelector('#carta-a-santa').comportamiento.values
"bueno"

Directamente con esta linea sin hacer un for
ya sabes cual de los 3 esat seleccionado

document.formulario funciona solo con el name

funciona por que formulario tiene el name formulario, si le ponemos Class formulario docuement.formulario no funcionaria no es nada, funciona solo con el name
