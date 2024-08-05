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

// router para consultar un dato del formulario

router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try{
        const mascotaDB = await mascota.findOne({_id: id})
        console.log(mascotaDB)
        res.render('detalle',{
            mascota:mascotaDB,
            error: false
        })
    }catch(error){
        console.log("error", error)
        res.render('detalle',{
            error: true,
            mensaje: 'no se encontró ningún registro que conincida con el id'
        })
    }
})

// router para borrar un dato del formulario

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try{
        const mascotaDB = await mascota.findByIdAndDelete({_id: id})
        if (!mascotaDB) {
            res.json({
                estado: false,
                mensaje: "No fue posible elimiar el registro"
            })
        } else {
            res.json({
                estado: true,
                mensaje: "Registro eliminado"
                })
        }
    }catch(error){
        console.log("error", error)
        
    }
})

//router para actualizar/modificar un registro

router.put('/:id', async(req, res)=>{
    const id = req.params.id;
    const body = req.body;
    console.log(body);
    try {
        const mascotaDB = await mascota.findByIdAndUpdate(
            id, body, {useFindAndModify: false}
        )
        res.json({
            estado: true,
            mensaje: 'Mascota editada'
        })
    } catch (error) {
        console.log(error);
        res.json({
            estado: false,
            mensaje: 'Edicion fallida'
        })
    }
});

module.exports = router;