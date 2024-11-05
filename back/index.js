const app = require("./src/server");
const conDb = require("./src/config/conDb")

conDb()
.then((res) => {
    app.listen(3000, () => {
        console.log("Base de Datos Conectada.");
        console.log("El Servidor esta funcionando en el puerto 3000");
    })
})
.catch((err) => {
    console.log("Error al conectar la base de datos.");
    console.log(err);
});
