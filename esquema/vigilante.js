const mongoose = require("mongoose");

const VigilanteSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
    cedula: {type: Number, required: true, unique: true},
    foto: {type: String, required: true}
},{
    versionKey : false
}
);

module.exports = mongoose.model('Vigilantes', VigilanteSchema);