//console.log(tempData);
const { makeWait, doneData, failData, moduloHTML } = require("./renders");


const catalogo = document.getElementById("catalogo");
const modulos = document.getElementById("modulos");

if (catalogo !== null) {
    catalogo.innerHTML = "";
    catalogo.appendChild(makeWait());

    $.get("https://students-api.up.railway.app/movies").done(doneData).fail(failData);
} else if (modulos !== null) {
    const modulodos = require("./proyecto");
    const losmodulos = modulodos.map(moduloHTML);
    losmodulos.forEach(elemento => modulos.appendChild(elemento));
}
