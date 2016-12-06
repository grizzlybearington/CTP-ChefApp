var express = require('express');
var path = require('path');
var router = express.Router();

router.use(express.static('public'));

// middleware that is specific to this router (We did not cover this in class)
// It applies to all routes defined in this controller
router.use(function timeLog(req, res, next) {
  console.log('Home Controller :: Time: ', Date.now());
  next();
});

// define the root articles route
router.get('/', function(req, res) {
  res.sendFile(path.resolve('public/html/index.html'));
});

module.exports = router;
