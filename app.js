var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
const db = require('./utils/db');
var UserProfile = require('./controllers/UserProfile');
var Contacts = require('./controllers/Contacts');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use(morgan('dev'));

app.use('/user', UserProfile);
app.use('/contact', Contacts);

app.listen(port, function (err) {
    if(err) throw err;
    console.log('server connect on port ' + port);
});
