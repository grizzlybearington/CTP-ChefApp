var express = require('express');
var app = express();
<<<<<<< HEAD
<<<<<<< HEAD
=======
var bodyParser = require('body-parser');
>>>>>>> e2350cc64ee75fe73b57b9eeaf5d0991a86214a8
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

=======

const home = require('./controllers/home');
const articles = require('./controllers/articles');
const authors = require('./controllers/authors');
const signup = require('./controllers/signup');
const login = require('./controllers/login');
const createchef = require('./controllers/createchef');

app.use('/', home);
app.use('/articles', articles);
app.use('/authors', authors);
app.use('/signup', signup);
app.use('/login', login);
app.use('/createchef', createchef);
/*
>>>>>>> refs/remotes/origin/sang
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
<<<<<<< HEAD
app.get('profile',function(req,res){
    res.send('Profile page is under construction.');
=======
app.get('/profile',function(req,res){
    res.send('Profile page is under construction.'); 
>>>>>>> e2350cc64ee75fe73b57b9eeaf5d0991a86214a8
});


//app.post('/', function (req, res) {
//  res.send('POST REQUEST!');
//});

*/

module.exports = app;
app.listen(8000, function () {
  console.log('Port 8000');
});
