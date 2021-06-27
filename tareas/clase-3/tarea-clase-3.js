// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

function tarea1() {
    const MI_NOMBRE = 'catriel';
    const nombreUsuario = (prompt('Ingresa tu nombre', 'raul')).toLowerCase();
    const NOMBRE_PARIENTE = 'graciela';

    function saludar() {
        if (nombreUsuario === MI_NOMBRE) {
            console.log(`Hola ${nombreUsuario}, somos Tocayos`);
        } else if (nombreUsuario === NOMBRE_PARIENTE) {
            console.log(`Hola ${nombreUsuario}, tu nombre es igual al de mi mama ${NOMBRE_PARIENTE}`);
        } else if (nombreUsuario >= 0) {
            alert(`No entendi tu "${nombreUsuario}"`);
            tarea1();
        } else {
            console.log(`Hola ${nombreUsuario}`);
        };

    };
    saludar();
};

//tarea1();
//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

function tarea2() {
    const MI_EDAD = 37;
    const edadUsuario = Number(prompt('Ingrese su edad', '40'));
    if (MI_EDAD < edadUsuario && edadUsuario > 0) {
        console.log(`Tengo ${MI_EDAD} años, soy menor que vos`);
    } else if (MI_EDAD > edadUsuario && edadUsuario > 0) {
        console.log(`Tengo ${MI_EDAD} años, soy mayor que vos`);
    } else if (MI_EDAD === edadUsuario && edadUsuario > 0) {
        console.log(`Tenemos la misma edad`);
    } else {
        alert(`No entendi tu edad "${edadUsuario}"`);
        tarea2();
    }
};

//tarea2();

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

function tarea3() {
    function poseeDocumento() {
        const poseeDocumento = (prompt('Tenes Documento?', 'si')).toLocaleLowerCase();


        function edadUsuario(poseeDocumento) {
            if (poseeDocumento === "no") {
                console.log('Sin documento no podes entrar al Bar');
            } else if (poseeDocumento === "si") {
                const edadUsuario = Number(prompt('Que edad tenes?', '37'));
                edadLegal(edadUsuario);
            } else {
                alert(`No entendi tu respuesta "${poseeDocumento}"`);
                tarea3();
            };

            function edadLegal(edadUsuario) {
                if (edadUsuario > 18) {
                    console.log('Bienvenido al Bar');
                } else if (edadUsuario < 18) {
                    console.log('Sos menor de edad, No podes entrar al bar');
                } else {
                    alert(`No entendi tu "${edadUsuario}"`);
                    tarea3();
                }
            };
        }
        edadUsuario(poseeDocumento);
    }
    poseeDocumento();

};

//tarea3();