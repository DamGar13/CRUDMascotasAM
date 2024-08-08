const mongoose = require('mongoose');
const schema = mongoose.Schema;

const servicioSchema = new schema({
    servicio: String,
    descripcion: String
})

const servicio = mongoose.model('servicio', servicioSchema);
module.exports = servicio;