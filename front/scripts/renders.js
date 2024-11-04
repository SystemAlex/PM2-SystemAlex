const posterHTML = (Poster) => {
    const { title, year, director, duration, genre, rate, poster } = Poster;

    const nuevoDiv = document.createElement("div");
    nuevoDiv.classList.add("catalogo_item");

    const nuevaFigure = document.createElement("figure");
    const titulo = document.createElement("a");
    titulo.innerHTML = title;
    titulo.title = title;
    titulo.setAttribute("data-bs-toggle", "tooltip");
    titulo.setAttribute("data-bs-placement", "auto");
    titulo.setAttribute("data-bs-delay", '{ "show": 500, "hide": 100 }');
    titulo.setAttribute("data-bs-custom-class", "custom-tooltip");
    const posterDiv = document.createElement("div");
    posterDiv.classList.add("poster");

    const spanAno = document.createElement("span");
    spanAno.classList.add("ano");
    spanAno.innerHTML = year;

    const spanRating = document.createElement("span");
    spanRating.classList.add("rating");
    const imgStar = document.createElement("img");
    imgStar.classList.add("rating-star");
    imgStar.src = "/assets/star.svg";
    const spanRate = document.createElement("span");
    spanRate.classList.add("rating-num");
    spanRate.innerHTML = rate;
    spanRating.appendChild(imgStar);
    spanRating.appendChild(spanRate);

    const imgPoster = document.createElement("div");
    //imgPoster.alt = title;
    //imgPoster.src = poster;
    imgPoster.title = title;
    imgPoster.setAttribute("data-bs-toggle", "tooltip");
    imgPoster.setAttribute("data-bs-placement", "auto");
    imgPoster.setAttribute("data-bs-delay", '{ "show": 500, "hide": 100 }');
    imgPoster.setAttribute("data-bs-custom-class", "custom-tooltip");
    imgPoster.classList.add("img");
    imgPoster.style.backgroundImage = "url('" + poster + "')";
    const divFilm = document.createElement("div");
    divFilm.classList.add("film");

    posterDiv.appendChild(spanAno);
    posterDiv.appendChild(spanRating);
    posterDiv.appendChild(imgPoster);
    posterDiv.appendChild(divFilm);

    const caption = document.createElement("figcaption");
    const spanDirec = document.createElement("span");
    spanDirec.innerHTML = "Director: ";
    const boldDirec = document.createElement("b");
    boldDirec.innerHTML = director;
    spanDirec.appendChild(boldDirec);
    const spanDurac = document.createElement("span");
    spanDurac.innerHTML = "Duracion: ";
    const boldDurac = document.createElement("b");
    boldDurac.innerHTML = duration;
    spanDurac.appendChild(boldDurac);

    const spanGen = document.createElement("span");
    spanGen.classList.add("generos");
    spanGen.innerHTML = "Generos: ";
    genre.map((element) => {
        const gen = document.createElement("b");
        gen.innerHTML = element;
        spanGen.appendChild(gen);
    });

    caption.appendChild(spanDirec);
    caption.appendChild(spanDurac);
    caption.appendChild(spanGen);

    nuevaFigure.appendChild(titulo);
    nuevaFigure.appendChild(posterDiv);
    nuevaFigure.appendChild(caption);

    nuevoDiv.appendChild(nuevaFigure);

    return nuevoDiv;
}

const makeWait = () => {
    const wait = document.createElement("div");
    wait.classList.add("loader-container");
    const innerWait = document.createElement("div");
    innerWait.classList.add("loader");
    const slice = document.createElement("div");
    slice.classList.add("spin");
    const counter = document.createElement("span");
    innerWait.appendChild(slice);
    innerWait.appendChild(counter);
    wait.appendChild(innerWait);

    return wait;
}

const doneData = ({data}) => {
    catalogo.innerHTML = "";
    const posters = data.map(posterHTML);
    posters.forEach(elemento => catalogo.appendChild(elemento));

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
}

const failData = (exeption) => {
    setTimeout(() => {
        catalogo.innerHTML = exeption.responseText;
        const resp = catalogo.textContent;
        catalogo.innerHTML = "Se Produjo una Excepción<br><br>Comuníquese con el Administrador<b>Informar error: " + resp + "</b>";
    }, 1000);
}

let counter = 1;

const moduloHTML = (modulo) => {
    const { titulo, actividad } = modulo;
    const show = actividad[0] !== "⌛...";

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

module.exports = { makeWait, doneData, failData, moduloHTML };