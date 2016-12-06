var express = require('express');
var app = express();

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

//ROUTE FOR PROFILE VIEWS
app.get('profile',function(req,res){
    res.send('Profile page is under construction.');
});


app.post('/', function (req, res) {
  res.send('POST REQUEST!');
});

*/

module.exports = app;
app.listen(8000, function () {
  console.log('Port 8000');
});
