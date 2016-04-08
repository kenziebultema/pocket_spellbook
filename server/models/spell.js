var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Spell = new Schema({
    name: {type: String},
    class: {type: String},
    level: {type: String},
});

module.exports = mongoose.model('Spell', Spell);
