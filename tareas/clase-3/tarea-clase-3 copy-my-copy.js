// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

// const MI_NOMBRE = 'johana';
// const nombre_hermana = 'viviana';
// const nombreUsuario = (prompt('Ingresa tu nombre') || '').toLowerCase();

/*ATENCION si apretan ESC en el prompt les va a dar un error. (prompt('Como te llamas?') || '').toLowerCase();
 null el usuario en este caso nuca ingreso un valor, entonces hay ausencia devalor*/

// if (MI_NOMBRE === nombreUsuario) {
//   console.log(`Hola, Tocaya! Yo tambien me llamo ${nombreUsuario} `);
// } else if (nombre_hermana === nombreUsuario) {
//   console.log(`Hola  ${nombreUsuario}, te llamás igual que mi hermana`);
// } else if (nombreUsuario.trim().length === 0) {
//   console.log('No ingresaste ningun nombre');
// } else {
//   console.log(`Hola, ${nombreUsuario}!`);
// }

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

// const MI_EDAD = 30;
// const edadUsuario = Number(prompt('Ingresa tu edad'));

// if (MI_EDAD > edadUsuario) {
//   console.log(`Eres menor que yo
//   `);
// } else if (MI_EDAD < edadUsuario) {
//   console.log(`Eres mayor que yo
//   `);
// } else if (MI_EDAD === edadUsuario) console.log('Tenemos la misma edad!!');
// else {
//   console.log('No entiendo la respuesta');
// }

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

// const usuarioDoc = prompt('Tiene documento? ( si / no )');

// if (usuarioDoc.toLowerCase() === 'si') {
//   const edad = prompt('Ingrese su edad');
//   if (edad >= 18) {
//     console.log('Bienvenido!!');
//   } else if (edad < 18) {
//     console.log('lo sentimos, no puede entrar');
//   }
// } else if (usuarioDoc.toLowerCase() === 'no') {
//   console.log('lo sentimos, no puede entrar');
// } else {
//   console.log('No entiendo la respuesta, por favor conteste (si/no)');
// }

//Fab's solution

// const EDAD_MINIMA_PARA_ENTRAR = 18;
// const RESPUESTA_SI = 'si';
// const RESPUESTA_NO = 'no';

// const usuarioTieneDocumento = prompt('Tienes documento?' || '').toLowerCase();
// if (RESPUESTA_SI === usuarioTieneDocumento) {
//   const edadUsuario = Number(prompt('Cual es tu edad?'));

//   if (EDAD_MINIMA_PARA_ENTRAR <= edadUsuario) {
//     console.log('Bienvenido!!');
//   } else if (EDAD_MINIMA_PARA_ENTRAR > edadUsuario) {
//     console.log('Lo sentimos, no puedes entrar');
//   } else {
//     console.log('No entendi la respuesta de la edad');
//   }
// } else if (RESPUESTA_NO === usuarioTieneDocumento) {
//   console.log('Lo sentimos, no puedes entrar');
// } else {
//   console.log('No entendi la respuesta del documento');
// }

//clean code part
function tarea() {
  // tareaCompararNombres();
  // tareaCompararEdades();
  // tareaEntradaAlBar();
}

function tareaCompararNombres() {
  const MI_NOMBRE = 'johana';
  const NOMBRE_HERMANA = 'viviana';
  const nombreUsuario = prompt('Ingresa tu nombre' || '');
  const nombreUsuarioMinusculas = nombreUsuario.toLowerCase();

  if (MI_NOMBRE === nombreUsuarioMinusculas) {
    console.log(`Hola, Tocaya! Yo tambien me llamo ${MI_NOMBRE} `);
  } else if (NOMBRE_HERMANA === nombreUsuarioMinusculas) {
    console.log(`Hola  ${NOMBRE_HERMANA}, te llamás igual que mi hermana`);
  } else {
    console.log(`Hola, ${nombreUsuario}!`);
  }
}

function tareaCompararEdades() {
  const MI_EDAD = 30;
  const edadUsuario = Number(prompt('Ingresa tu edad'));

  if (MI_EDAD > edadUsuario) {
    console.log(`Eres menor que yo
  `);
  } else if (MI_EDAD < edadUsuario) {
    console.log(`Eres mayor que yo
  `);
  } else if (MI_EDAD === edadUsuario)
    console.log(`Tenemos la misma edad!! ${MI_EDAD}`);
  else {
    console.log('No entiendo la respuesta');
  }
}

function tareaEntradaAlBar() {
  const SALUDO_ENTRADA = 'Asi que quieres entrar al var, veamos';
  alert(SALUDO_ENTRADA);

  const tieneID = preguntarIDEnLaEntrada();

  if (tieneID) {
    preguntarEdadEnLaEntrada();
  }
}

//devuelve true si tiene ID, devuelve false si no tiene ID
function preguntarIDEnLaEntrada() {
  const RESPUESTA_SI = 'si';
  const RESPUESTA_NO = 'no';
  const usuarioTieneID = prompt('Tienes ID?' || '').toLowerCase();
  if (usuarioTieneID === RESPUESTA_SI) {
    return true;
  } else if (RESPUESTA_NO === usuarioTieneID) {
    alert('Ve a buscar tu ID');
    return false;
  } else {
    alert('No entendi');
    return preguntarIDEnLaEntrada(); // esta es la respuesta de la funcion
  }
}

function preguntarEdadEnLaEntrada() {
  const EDAD_MINIMA_PARA_ENTRAR = 18;
  const EDAD_USUARIO = Number(prompt('Cual es tu edad?'));
  const esMayorDeEdad = EDAD_USUARIO >= EDAD_MINIMA_PARA_ENTRAR;
  if (esMayorDeEdad) {
    alert('Bievenido!!');
  } else {
    alert('No eres mayor de edad aun');
  }
}
tarea();
