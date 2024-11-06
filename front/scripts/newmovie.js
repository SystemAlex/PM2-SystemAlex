const axios = require("axios");
const { fillMovies } = require("./renders");

const newmovie = () => {
    moviesForm.title.focus();
    document.getElementById("clearBtn").addEventListener("click", () => {
        moviesForm.reset();
        moviesForm.title.focus();
    });

    document.getElementById("addBtn").addEventListener("click", (event) => {
        if (moviesForm.checkValidity()) {
            event.preventDefault();
            //Verifica si al menos se selecciono un genero
            let genresChecked = document.querySelectorAll("input[name='genre']:checked");
            if (genresChecked.length === 0) {
                alert("Debe seleccionar al menos un género.");
                let genresChecked = document.querySelectorAll("input[name='genre']");
                genresChecked[0].focus();
                return;
            }
            //Verifica si la URL es de una imagen
            isImage(moviesForm.poster.value).then(isImage => {
                if (!isImage) {
                    alert("La URL debe ser de una imagen")
                    moviesForm.poster.focus();
                    return;
                }
            });

            const genresList = Array.from(genresChecked).map(genre => genre.value);

            const objetoMovie = {
                title: moviesForm.title.value,
                year: moviesForm.year.value,
                director: moviesForm.director.value,
                duration: `${moviesForm.durationH.value}h ${moviesForm.durationM.value}min`,
                genre: genresList,
                rate: moviesForm.rate.value,
                poster: moviesForm.poster.value
            }

            for (const key in objetoMovie) {
                if (!objetoMovie[key]) {
                    alert(`el campo ${key} es requerido`);
                    return;
                }
            }

            axios.post("http://localhost:3000/movies", objetoMovie)
                .then((respuesta) => {
                    console.log(respuesta);
                    alert("Pelicula creada con exito");
                    moviesForm.reset();
                    moviesForm.title.focus();
                    fillMovies();
                })
                .catch((error) => {
                    alert("Error al crear la pelicula, verifique los datos");
                    console.log(error);
                });
        }
    });
}

function isImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = url;
    });
}

module.exports = newmovie;