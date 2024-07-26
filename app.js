const express = require('express')
const app = express()
const port = 3000

//Establecemos el motor de plantillas

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//middleware para contenido estatico

app.use(express.static(__dirname + '/public'));

//enrutamiento

app.get('/', (req, res) => {
    //res.send('¡¡¡Hello World!!!');
    res.render('index', {titulo: "Titulo dinamico con EJS y Express"});
})

//ejemplo de enrutamiento

app.get('/servicios', (req, res) => {
    //res.send("Bienvenido a la pagina de servicios");
    res.render('Servicios', {titulo: "Nuestros servivios Dinamicos"});
})

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