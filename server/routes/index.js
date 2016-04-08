var express = require('express');
var path = require('path');
var Spell = require('../models/spell');

var router = express.Router();

router.get('/spell', function(req, res, next){
    Spell.find(function(err, spells){
        if(err){
            return next(err);
        }
        res.send(spells);
    });
});

router.get('/*', function(req, res, next){
    var file = req.params[0] || '/views/index.html';

    res.sendFile(path.join(__dirname, '../public/', file));
});

module.exports = router;
