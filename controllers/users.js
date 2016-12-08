var express = require('express');
var path = require('path');
var models = require('../models');
var router = express.Router();

// middleware that is specific to this router (We did not cover this in class)
// It applies to all routes defined in this controller
router.use(function timeLog(req, res, next) {
  console.log('Users Controller :: Time: ', Date.now());
  next();
});

router.get('/', function(req, res) {
  models.User.findAll({})
    .then(function (users) {
      if (users != null) {
        res.send('Users List: <br /><pre>' + JSON.stringify(users, null, 4) + '</pre>');
      } else {
        res.send('No Users found');
      }
    });
});

module.exports = router;
