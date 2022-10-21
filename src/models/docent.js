const mongoose = require('mongoose');
const campus = require('./campus');

const Docentschema = new mongoose.Schema({
    voornaam: {type: String},
    achternaam: {type: String},
    campussen: [{type: mongoose.Schema.Types.ObjectId, ref: campus}],
}, {
    collection: 'docent'
});

module.exports = mongoose.model('Docent',Docentschema);