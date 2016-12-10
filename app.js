var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.engine('handlebars', exphbs({
  layoutsDir: './views/layouts',
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.set('views', `${__dirname}/views/`);

const home = require('./controllers/home');
const articles = require('./controllers/articles');
const authors = require('./controllers/authors');
const signup = require('./controllers/signup');
const login = require('./controllers/login');
const csignup = require('./controllers/c-signup');
const about = require('./controllers/about');
const users = require('./controllers/users');

app.use('/', home);
app.use('/articles', articles);
app.use('/authors', authors);
app.use('/signup', signup);
app.use('/login', login);
app.use('/c-signup', csignup);
app.use('/about', about);
app.use('/users', users);

module.exports = app;
app.listen(8000, function () {
  console.log('Port 8000');
});
