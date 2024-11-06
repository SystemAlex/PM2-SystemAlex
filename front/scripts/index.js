//console.log(tempData);
const newmovie = require("./newmovie");
const { fillMovies, moduloHTML } = require("./renders");

const curpath = location.pathname;

if (curpath === "/" || curpath.includes("newmovie")) {
    fillMovies();

    if (curpath.includes("newmovie")) {
        newmovie();
    }

} else if (curpath.includes("proyecto")) {
    const modulos = document.getElementById("modulos");
    const modulodos = require("./proyecto");
    const losmodulos = modulodos.map(moduloHTML);
    losmodulos.forEach(elemento => modulos.appendChild(elemento));
}