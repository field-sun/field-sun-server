var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var knex 		   = require('./config/db');
var port 		   = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));
require('./routes/routes')(app);

var bookshelf = require('./config/db');

app.listen(port);	
console.log('ENGNR API running on: ' + port);
exports = module.exports = app;