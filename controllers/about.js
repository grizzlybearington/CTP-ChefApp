var express = require('express');
var path = require('path');
var router = express.Router();

// middleware that is specific to this router (We did not cover this in class)
// It applies to all routes defined in this controller
router.use(function timeLog(req, res, next) {
  console.log('About Controller :: Time: ', Date.now());
  next();
});

router.get('/', function(req, res) {
  res.sendFile(path.resolve('public/html/about.html'));
});

module.exports = router;
