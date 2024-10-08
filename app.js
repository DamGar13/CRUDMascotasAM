const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// conexion a la base de datos mongodb cloud

const mongoose = require('mongoose');
const usuario = 'damiang_13';
const password = 'P5Nt539aeDm6yAZZ';
const dbName = 'veterinaria';

const uri = `mongodb+srv://${usuario}:${password}@cluster0.tm9afqm.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(uri)
  .then(() => console.log("Conectado a MongoDB"))
  .catch(e => console.log("error de conexion a MongoDB", e));

//Establecemos el motor de plantillas

app.set('view engine', 'ejs');

//Establecemos la ruta donde se encuentran las vistas

app.set('views', __dirname + '/views');

//middleware para contenido estatico

app.use(express.static(__dirname + '/public'));

// rutas web

app.use("/", require("./router/rutasweb"));
app.use("/mascotas", require("./router/mascotas"));
app.use("/servicios", require("./router/servicios"));

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