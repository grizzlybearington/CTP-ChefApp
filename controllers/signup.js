var express = require('express');
var path = require('path');
var models = require('../models');
var router = express.Router();

// middleware that is specific to this router (We did not cover this in class)
// It applies to all routes defined in this controller
router.use(function timeLog(req, res, next) {
  console.log('Signup Controller :: Time: ', Date.now());
  next();
});

router.get('/', function(req, res) {
  res.sendFile(path.resolve('public/html/signup.html'));
});

router.post('/', function(req, res) {
  console.log(req.body);
  models.User.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    user_name: req.body.username,
    password: req.body.password,
    email: req.body.email
  }).then(function (users) {
    res.redirect('/users')
  }).catch(function(e) {
    res.send('ERROR: creating a user');
  })
});

module.exports = router;
