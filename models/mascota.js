const mongoose = require('mongoose');
const schema = mongoose.Schema;

const mascotaSchema = new schema({
    nombre: String,
    descripcion: String
})

/* creacion de modelo */

const mascota = mongoose.model('mascota', mascotaSchema);
module.exports = mascota;