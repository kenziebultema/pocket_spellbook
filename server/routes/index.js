var express = require('express');
var path = require('path');
var Spell = require('../models/spell');

var router = express.Router();

router.get('/spell/class/:classval', function(req, res, next){
    var spellClass = req.params.classval;
    var spellBundle = [];
    console.log(spellClass);
    Spell.find(function(err, spells){
        if(err){
            return next(err);
        }
        for(var i = 0; i < spells.length; i++){
            for(var j = 0; j < spells[i].learnedby.length; j++){
                if(spells[i].learnedby[j] == spellClass){
                    spellBundle.push(spells[i]);
                    // console.log(spellBundle);
                }
            }
        }
        // console.log('bundle', spellBundle);
        res.send(spellBundle);
    });
});

router.get('/spell/level/:levelval', function(req, res, next){
    var spellLevel = req.params.levelval;
    var spellBundle = [];
    console.log(spellLevel);
    Spell.find(function(err, spells){
        if(err){
            return next(err);
        }
        for(var i = 0; i < spells.length; i++){
            if(spells[i].level == spellLevel){
                spellBundle.push(spells[i]);
            }
        }
        res.send(spellBundle);
    });
});

router.get('/spell/name/:nameval', function(req, res, next){
    var spellName = req.params.nameval;
    spellName = spellName.toLowerCase();
    var spellBundle = [];
    console.log(spellName);
    Spell.find(function(err, spells){
        if(err){
            return next(err);
        }
        for(var i = 0; i < spells.length; i++){
            var tempName = spells[i].name.toLowerCase();
            if(tempName == spellName){
                spellBundle.push(spells[i])
            }
        }
        res.send(spellBundle);
    });
});

router.get('/spell/classlevel/:classval/:levelval', function(req, res, next){
    var spellClass = req.params.classval;
    var spellLevel = req.params.levelval;
    var spellBundle = [];
    console.log(spellClass, spellLevel);
    Spell.find(function(err, spells){
        if(err){
            return next(err);
        }
        for(var i = 0; i < spells.length; i++){
            for(var j = 0; j < spells[i].learnedby.length; j++){
                if(spells[i].learnedby[j] == spellClass && spells[i].level == spellLevel){
                    spellBundle.push(spells[i]);
                    console.log(spellBundle);
                }
            }
        }
        res.send(spellBundle);
    });
});

router.get('/*', function(req, res, next){
    var file = req.params[0] || '/views/index.html';
    res.sendFile(path.join(__dirname, '../public/', file));
});

module.exports = router;
