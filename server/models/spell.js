var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Spell = new Schema({
    name: {type: String},
    level: {type: String},
    type: {type: String},
    casttime: {type: String},
    range: {type: String},
    components: {type: String},
    duration: {type: String},
    description: {type: String},
    damagetype: {type: String},
    die: {type: String},
    learnedby: {type: Array}
});

module.exports = mongoose.model('Spell', Spell);
