//console.log(tempData);
const { makeWait, doneData, failData, moduloHTML } = require("./renders");
const axios = require("axios");


const catalogo = document.getElementById("catalogo");
const modulos = document.getElementById("modulos");

if (catalogo !== null) {
    catalogo.innerHTML = "";
    catalogo.appendChild(makeWait());

    axios.get("https://students-api.up.railway.app/movies").then(doneData).catch(failData);
} else if (modulos !== null) {
    const modulodos = require("./proyecto");
    const losmodulos = modulodos.map(moduloHTML);
    losmodulos.forEach(elemento => modulos.appendChild(elemento));
}
