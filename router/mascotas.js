const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('mascotas', {titulo: "Página de mascotas"});
})

module.exports = router;