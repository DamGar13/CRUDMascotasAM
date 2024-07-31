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
    /*res.render('mascotas', {arrayMascotas: [
        {id: 'mas001', nombre: 'Marly', descripcion: 'Gato criollo'},
        {id: 'mas002', nombre: 'Manchas', descripcion: 'Gato de raza'},
        {id: 'mas003', nombre: 'Risas', descripcion: 'Perro criollo'},
        {id: 'mas004', nombre: 'Axel', descripcion: 'Perro criollo'},
    ]});*/
})

module.exports = router;