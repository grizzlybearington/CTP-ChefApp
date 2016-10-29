/*Proper app.js file*/

var express = require('express');
var app = express();


/* This will redirect us to /home */
app.get('/', function (req, res) {
  res.redirect('../home');
});

// ROUTES FOR MAIN PAGES --------------

// ROUTE FOR HOMEPAGE
app.get('/home', function(req,res){
	res.sendFile(__dirname + '/public/html/index.html');
});

// ROUTE FOR ABOUT US
app.get('/about', function(req,res){
	res.sendFile(__dirname + '/public/html/about.html');
});

// ROUTE FOR CREATING ACCOUNT
app.get('/signup', function(req,res){
	res.sendFile(__dirname + '/public/html/signup.html');
});

// ROUTE FOR CREATING CHEF ACCOUNT
app.get('/c-signup', function(req,res){
	res.send('Page is under construction');
});

// ROUTE FOR PHOTO GALLERY
app.get('/gallery', function(req,res){
	res.sendFile(__dirname + '/public/html/gallery.html');
});

app.post('/', function (req, res) {
  res.send('POST REQUEST!');
});

app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});
