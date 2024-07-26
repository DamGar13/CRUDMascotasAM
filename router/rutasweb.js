const express = require('express')
const router = express.Router()

//enrutamiento

router.get('/', (req, res) => {
    //res.send('¡¡¡Hello World!!!');
    res.render('index', {titulo: "Titulo dinamico con EJS y Express"});
})

//ejemplo de enrutamiento

router.get('/servicios', (req, res) => {
    //res.send("Bienvenido a la pagina de servicios");
    res.render('Servicios', {titulo: "Nuestros servivios Dinamicos"});
})

module.exports = router;