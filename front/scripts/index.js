//console.log(tempData);
const { makeWait, doneData, failData, moduloHTML } = require("./renders");
const axios = require("axios");


const catalogo = document.getElementById("catalogo");
const modulos = document.getElementById("modulos");
const moviesForm = document.getElementById("moviesForm");

if (catalogo !== null) {
    catalogo.innerHTML = "";
    catalogo.appendChild(makeWait());

    axios.get("http://localhost:3000/movies").then(doneData).catch(failData);

    if (moviesForm !== null) {
        moviesForm.title.focus();
        document.getElementById("clearBtn").addEventListener("click", () => {
            moviesForm.reset();
            moviesForm.title.focus();
        });
        
        document.getElementById("addBtn").addEventListener("click", (event) => {
            if (moviesForm.checkValidity()) {
                event.preventDefault();    
                let checkboxes = document.querySelectorAll("input[name='genre']:checked");
                if (checkboxes.length === 0) {
                    alert("Debe seleccionar al menos un género.");
                    let checkboxes = document.querySelectorAll("input[name='genre']");
                    checkboxes[0].focus();
                    return;
                }
                isImage(moviesForm.poster.value).then(isImage => {
                    if (!isImage){
                        alert("La URL debe ser de una imagen")
                        moviesForm.poster.focus();
                        return;
                    }
                });
            }
        });
    }

} else if (modulos !== null) {
    const modulodos = require("./proyecto");
    const losmodulos = modulodos.map(moduloHTML);
    losmodulos.forEach(elemento => modulos.appendChild(elemento));
}

function isImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = url;
    });
}