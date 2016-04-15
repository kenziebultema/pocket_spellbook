var mongoose = require('mongoose');

var mongoURI =
    process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://localhost/pocket_spellbook';
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function(err){
    console.log('mongo connection error: ', err);
});

MongoDB.on('open', function(){
    console.log('mongo connection open');
});

module.exports = MongoDB;
