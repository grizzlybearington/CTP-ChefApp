var express = require('express');
var router = express.Router();
var models = require('../models');

router.use(function timelog(req,res,next){ 
    console.log('Author controller :: Time ', Date.now());
    next();
});

router.get('/',function(req,res){
   models.Author.findAll({}) 
    .then(function(author) {
       if (author != null){
           res.send('Author List: <br /><pre>' + JSON.stringify(author,null,4) + '<prev>')
       } else {
           res.send('No authors found');
       } 
   });
});

router.get('/:id',function(req,res){
   models.Author.findById(req.params.id) 
    .then(function(author){
    if (author!=null){
       res.send('Found Author < br /><prev>' + JSON.stringify(author, null, 4) + '</pre>')
   } else {
       res.send('Did not find author');
   }      
    });
});

module.exports = router;