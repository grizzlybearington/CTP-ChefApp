/*Proper app.js file*/

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');
app.use(express.static(__dirname + '/public'));

var urlencodedParser = bodyParser.urlencoded({extend:false});



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

app.get('/login', function(req,res){
   res.sendFile(__dirname +'/public/html/login.html'); 
});

app.post('/login', urlencodedParser, function(req,res){
   if(!req.body) return res.sendStatus(400);
 console.log(req.body);
    res.send('welcome' + req.body);
});



// ROUTE FOR CREATING ACCOUNT
app.get('/signup', function(req,res){
	res.sendFile(__dirname + '/public/html/signup.html');
});

// ROUTE FOR PHOTO GALLERY
app.get('/gallery', function(req,res){
	res.sendFile(__dirname + '/public/html/gallery.html');
});

//ROUTE FOR PROFILE VIEWS
app.get('/profile',function(req,res){
    res.send('Profile page is under construction.'); 
});


//app.post('/', function (req, res) {
//  res.send('POST REQUEST!');
//});

app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});
