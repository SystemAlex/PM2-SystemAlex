const modulodos = [
    {
        titulo: "Lecture 1 - Proyectos Full Stack ✔️",
        actividad: ["- Diseño de páginas web con HTML. ✓", "- Creación de enlaces y navegación con HTML. ✓", "- Estilos con CSS. ✓", "- Manipulación del DOM con JavaScript. ✓"]
    },
    {
        titulo: "Lecture 2 - AJAX ✔️",
        actividad: ["- Manipulación del DOM con JavaScript. ✓", "- Solicitudes HTTP con AJAX. ✓"]
    },
    {
        titulo: "Lecture 3 - Frameworks CSS ✔️",
        actividad: ["- Aplicación de estilos con CSS. ✓", "- Aplicación de estilos utilizando el framework Bootstrap. ✓"]
    },
    {
        titulo: "Lecture 4 - Node ✔️",
        actividad: ["- Instalación y configuración de dependencias con NPM. ✓"]
    },
    {
        titulo: "Lecture 5 - Testing Advanced",
        actividad: ["⌛..."]
    },
    {
        titulo: "Lecture 6 - Asincronismo",
        actividad: ["⌛..."]
    },
    {
        titulo: "Lecture 7 - Express",
        actividad: ["⌛..."]
    },
    {
        titulo: "Lecture 8 - Express II",
        actividad: ["⌛..."]
    },
    {
        titulo: "Lecture 9 - Database Fundamentals",
        actividad: ["⌛..."]
    },
    {
        titulo: "Lecture 10 - MongoDB",
        actividad: ["⌛..."]
    },
    {
        titulo: "Lecture 11 - Mongoose",
        actividad: ["⌛..."]
    },
    {
        titulo: "Lecture 12 - Mongoose II",
        actividad: ["⌛..."]
    },
    {
        titulo: "Lecture 13 - Backend Advanced",
        actividad: ["⌛..."]
    },
    {
        titulo: "Lecture 14 - JavaScript Advanced",
        actividad: ["⌛..."]
    }
];

let counter = 1;

const moduloHTML = (modulo) => {
    const { titulo, actividad } = modulo;
    const show = actividad.length > 1;

    const item = document.createElement("div");
    item.classList.add("accordion-item");

    const head = document.createElement("h5");
    head.classList.add("accordion-header");

    const button = document.createElement("button");
    button.classList.add("accordion-button");
    button.classList.add("fs-5");
    button.classList.add("shadow-none");
    show ? "" : button.classList.add("collapsed");
    button.type = "button";
    button.setAttribute("data-bs-toggle", "collapse");
    button.setAttribute("data-bs-target", "#collapse" + counter);
    button.setAttribute("aria-expanded", show);
    button.setAttribute("aria-controls", "collapse" + counter);
    button.textContent = titulo;

    head.appendChild(button);

    const collapse = document.createElement("div");
    collapse.id = "collapse" + counter;
    collapse.classList.add("accordion-collapse");
    collapse.classList.add("collapse");
    show ? collapse.classList.add("show") : "";

    const body = document.createElement("div");
    body.classList.add("accordion-body");
    actividad.map((element) => {
        const gen = document.createElement("p");
        gen.innerHTML = element;
        body.appendChild(gen);
    });

    collapse.appendChild(body);

    item.appendChild(head);
    item.appendChild(collapse);

    counter++;
    return item;
}

const modulos = document.getElementById("modulos");
const losmodulos = modulodos.map(moduloHTML);
losmodulos.forEach(elemento => modulos.appendChild(elemento));