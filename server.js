var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

var port = process.env.PORT || 8080;

var Sequelize = require('sequelize')
  , sequelize = new Sequelize('engnr', null, null, {
      dialect: 'postgres',
      host: 'localhost',
      port: process.env.DBPORT || 5432,
    });

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));
require('./app/routes')(app);

app.listen(port);	
console.log('ENGNR API running on: ' + port);
exports = module.exports = app;