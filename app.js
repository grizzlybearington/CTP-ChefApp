/*Proper app.js file*/

var express = require('express');
var app = express();
var Sequelize = require('sequelize');
app.use(express.static(__dirname + '/public'));

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
app.get('/about.html', function(req,res){
	res.sendFile(__dirname + '/public/html/about.html');
});

app.get('/login.html', function(req,res){
   res.sendFile(__dirname +'/public/html/login.html'); 
});

// ROUTE FOR CREATING ACCOUNT
app.get('/signup.html', function(req,res){
	res.sendFile(__dirname + '/public/html/signup.html');
});

// ROUTE FOR PHOTO GALLERY
app.get('/gallery', function(req,res){
	res.sendFile(__dirname + '/public/html/gallery.html');
});

//ROUTE FOR PROFILE VIEWS
app.get('profile',function(req,res){
    res.send('Profile page is under construction.'); 
});


//app.post('/', function (req, res) {
//  res.send('POST REQUEST!');
//});

app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});
