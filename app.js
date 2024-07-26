const express = require('express')
const app = express()
const port = 3000

//Establecemos el motor de plantillas

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//middleware para contenido estatico

app.use(express.static(__dirname + '/public'));

// rutas web

app.use("/", require("./router/rutasweb"));

//direccionar a vista 404 cuando se presente un error de redireccionamiento

app.use((req, res, next) => {
  res.status(404).render('404',{
    titulo: "Error 404",
    descripcion: "Pagina no encontrada"
  });
})

//

app.listen(port, () => {
  console.log(`Ejemplo de aplicacion Node con Express escuchando en puerto ${port}`);
})