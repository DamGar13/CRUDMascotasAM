const express = require('express')
const router = express.Router()

const mascota = require('../models/mascota')

router.get('/', async (req, res) => {
    try {
        const arrayMascotas = await mascota.find();
        //console.log(arrayMascotas)
        res.render("mascotas", {arrayMascotas})
    } catch (error) {
        console.log(error)
    }
})

// render para pagina 'crear nueva mascota'

router.get('/crear', (req, res) => {
    res.render('crear');
})

// router para recibir datos del formulario crear

router.post('/', async (req, res) => {
    const body = req.body;
    try{
        await mascota.create(body)
        res.redirect('/mascotas')
    }catch(error){
        console.log("error", error)
    }
})

module.exports = router;