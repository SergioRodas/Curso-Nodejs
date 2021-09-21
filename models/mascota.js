const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const mascotaSchema = new Schema ({
    name: String,
    description: String
})

// crear modelo

const Mascota = mongoose.model('Mascota', mascotaSchema);

module.exports = Mascota;