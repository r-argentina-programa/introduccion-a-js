//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!
(function main() {
  const formEl = document.querySelector(".form");
  formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const titleEl = document.querySelector(".title");
    // Capturo los datos
    const firstNameValueEl = document.querySelector(".first-name").value;
    const secondNameValueEl = document.querySelector(".second-name").value;
    const lastNameValueEl = document.querySelector(".last-name").value;
    const ageValueEl = document.querySelector(".age").value;
    // Capturo los datos
    const contentEl = document.querySelector(".content");

    titleEl.textContent = "Bienvenido, " + firstNameValueEl;
    contentEl.innerHTML = `<p>${firstNameValueEl} ${secondNameValueEl} ${lastNameValueEl} ${ageValueEl}</p>`;
  });
})();
