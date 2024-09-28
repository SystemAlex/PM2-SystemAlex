//console.log(tempData);
// Actividad a HTML
const posterHTML = (Poster) => {
    const { title, year, director, duration, genre, rate, poster } = Poster;

    const nuevoDiv = document.createElement("div");
    nuevoDiv.classList.add("catalogo_item");

    const nuevaFigure = document.createElement("figure");
    const titulo = document.createElement("a");
    titulo.innerHTML = title;
    titulo.title = title;
    const posterDiv = document.createElement("div");
    posterDiv.classList.add("poster");

    const spanAno = document.createElement("span");
    spanAno.classList.add("ano");
    spanAno.innerHTML = year;

    const spanRating = document.createElement("span");
    spanRating.classList.add("rating");
    const imgStar = document.createElement("img");
    imgStar.classList.add("rating-star");
    imgStar.src = "assets/star.svg";
    const spanRate = document.createElement("span");
    spanRate.classList.add("rating-num");
    spanRate.innerHTML = rate;
    spanRating.appendChild(imgStar);
    spanRating.appendChild(spanRate);

    const imgPoster = document.createElement("div");
    //imgPoster.alt = title;
    //imgPoster.src = poster;
    imgPoster.title = title;
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

// Todas los posters a HTML
function postersHTML() {
    const catalogo = document.getElementById("catalogo");
    catalogo.innerHTML = "";

    $.get("https://students-api.up.railway.app/movies", (data) => {
        const posters = data.map(posterHTML);

        posters.forEach(elemento => catalogo.appendChild(elemento));
    })
}

postersHTML();
