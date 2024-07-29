const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('mascotas', {arrayMascotas: [
        {id: 'mas001', nombre: 'Marly', descripcion: 'Gato criollo'},
        {id: 'mas002', nombre: 'Manchas', descripcion: 'Gato de raza'},
        {id: 'mas003', nombre: 'Risas', descripcion: 'Perro criollo'},
        {id: 'mas004', nombre: 'Axel', descripcion: 'Perro criollo'},
    ]});
})

module.exports = router;