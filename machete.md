# Machete de JavaScript

## JavaScript (o JS)
Es una lengua de programación popular que se suele usar para crear efectos interactivos dentro de los navegadores web.

## variable
Es un espacio para almacenamiento de valores, puede almacenar cualquier tipo de informacion (tipos de datos): numeros, palabras, conjuntos de datos, etc.

### undefined variable o variable no definida
Es una variable que no tiene valor

### declare o declarar una variable
se crea como en el siguiente ejemplo:
```
let nombreVariable = valor;
```
### initialize o inicializar una variable
Asignar o darle un valor a una variable

## tipos de variables
### string o cadena de caracteres
Se refiere a un conjunto de caracteres, palabra(s) o frases. Para inicializar una variable con una string o cadena de caracteres, hay que poner el mismo entre comillas dobles.

### boolean o dato lógico
Un boolean o tipo de dato logico representa un valor logico, True or False, Verdadero o Falso

### array o vector
Es una lista ordenada de valores, puede guardar diferentes tipos de datos

### operator u operador
Son operadores matematicos, por ej.: +, -, *, /, >, <, = etc.

## comments o comentarios
Los comentarios son notas que se dejan para uno o para otra persona, es una nota que la computadora no va a leer. Se puede escribir un comentario en una linea nueva o en la misma linea que una linea de codigo de la siguiente forma:
 
```
let varibleNombre; //Soy tu comentario
```

Los comentarios que ocupan una sola linea comienzan con `//`, todo el espacio posterior al comentario en la misma linea va a estar afectado

Los comentarios que ocupan varias lineas se escriben entre `/* .. */` y pueden terminar en cualquier lugar dentro de una linea

## function o funcion
Es un bloque o fragmento de codigo reusable y separable (existe como una unidad funcional). Puede recibir un input o valor de entrada, realizar alguna operacion sobre ella o manipularla y devolver un output o valor de salida

### declare o declarar una funcion
Crea una funcion

### argument o argumento; parameter o parámetro.
En un valor de entrada que las fuciones pueden aceptar

## if/else statement o sentencia condicional

`if` se usa para decidir si se ejecutan ciertas lineas de codigo, `else` da una lista de instrucciones alternativas

Ejemplo:
```
if (x > 5) {
    console.log("X es mayor a 5");
}
else {
    console.log("X es menor o igual a 5");
}

```
## Iterating/Loops o Iteraciones/Estructuras de control - Bucles

### while loop o bucle while
Repite el codigo hasta que se cumpla cierta condicion

### for loop o bucle for
Es similar al ‘while loop’, pero tiene un numero especificado de repeticiones. Se declara un contador en la sentencia de la siguiente forma:

```
for (let i = 0; i < 5; i++) {
    //hacer algo 5 veces
}
```

### infinite loop o bucle infinito
Esto es un error y causa un bucle indefinido

Para evitar este error todo loop o bucle debe tener alguna condicion que le permita parar o salir del bucle y algo que permita que la condicion pueda cumplirse

## object u objeto
Se crea un tipo de objeto cuando un usuario interactua con una pagina web. Por ejemplo, JavaScript crea un evento cuando un usuario toca un boton.
 
## CSS
Significa Cascading Style Sheets u Hoja de Estilos en Cascada. CSS permite describir como deben mostrarse los elementos HTML en pantalla. Seria la presentacion de dichos elementos.
 
## HTML
Significa Hyper Text Markup Language o Lenguaje de Marcado de HiperTexto. Permite crear la estructura de los elementos en una pagina web.
 
## DOM 
Significa Document Object Model o Modelo de Objetos para la Representación de Documentos. Define la estructura logica del documento y la forma en que se accede a este y se lo manipula.

## scope o alcance/ambito
Scope se define como el conjunto de varibles, objetos y funciones al cual uno puede acceder.

## console o consola
Es una forma de interactuar con el sistema. Para escribirle a la consola del navegador, podria usarse console.log(‘Hello World’). Esto escribiria o mostraria Hello World en la consola del navegador.
