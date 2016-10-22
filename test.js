const express = require('express');
const app = express();

// Load and mount the articles controller
//const articles = require('./controllers/articles');
const authors = require('./controllers/author');
//app.use('/articles', articles);
app.get('/', function (req, res) {
  res.send('Got it working!');
});


app.use('/author', authors);

module.exports = app;
app.listen(8000, function () {
  console.log('Example app listening on port 8000! Test.js');
});