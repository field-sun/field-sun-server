var User = require('../api/user/user.model');
var Companies = require('../api/company/company.model');
var Cards = require('../api/cards/cards.model');

var knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: null,
    password: null,
    database: 'engnr'
  }
});

module.exports = function(app) {

  app.get('/', function(req, res) {
    res.sendfile('./public/index.html');
  });

// GET Request to api/user?name='name'
// On success returns an array of JSON objects
  app.get('/api/user', function(req, res) {
  	new User().where({
  		name: req.query.name
  	})
  	.fetchAll().then(function(user){
  		res.send(user.toJSON());
  	}).catch(function(error) {
      console.log(error);
      res.send('An error occured');
    });
  });

// POST Request to api/user
// Expects urlenconded keys/values
// Expects name/location/linkedin/github/auth
// On success returns a JSON object with the user id
  app.post('/api/user', function(req, res) {
  	new User({
  		name: req.body.name,
  		location: req.body.location,
  		linkedin_token: req.body.linkedin,
  		github_token: req.body.github,
  		auth_token: req.body.auth
  	})
  	.save().then(function(user){
  		res.send({id: user.id});
  	}).catch(function(error) {
      console.log(error);
      res.send('An error occured', error);
    });
  });

// GET Request to api/company?name='name'
// On success returns an array of JSON objects
  app.get('/api/company', function(req, res) {
  	new Companies({
  		name: req.query.name
  	})
  	.fetchAll().then(function(user){
  		res.send(user.toJSON());
  	}).catch(function(error) {
      console.log(error);
      res.send('An error occured');
    });
  });

// POST Request to api/company
// Expects urlenconded keys/values
// Expects name & location
// On success returns a JSON object with the comopany id
  app.post('/api/company', function(req, res) {
  	new Companies().where({
  		name: req.body.name,
  		location: req.body.location
  	})
  	.save().then(function(company){
  		res.send({id: company.id});
  	}).catch(function(error) {
      console.log(error);
      res.send('An error occured');
    });
  });

// GET Request to api/users
// On success returns an array of JSON objects
  app.get('/api/users', function(req, res) {
    new User().fetchAll().then(function(users) {
      res.send(users.toJSON());
    }).catch(function(error) {
      console.log(error);
      res.send('An error occured');
    });
  });

// GET Request to api/companies
// On success returns an array of JSON objects
  app.get('/api/companies', function(req, res) {
    new Companies().fetchAll().then(function(companies) {
      res.send(companies.toJSON());
    }).catch(function(error) {
      console.log(error);
      res.send('An error occured');
    });
  });

// GET Request to api/cards/new?id='id'
// Expects id
// On success returns a JSON object with potential mathces
  app.get('/api/company/cards/new', function(req, res) {
  	knex.select('name', 'company_id')
		.from('companies')
			.leftOuterJoin('matches', 'companies.id', 'company_id')
			.where({users_id: req.query.id, interest: null})
    .then(function(cards) {
      res.send(cards);
    }).catch(function(error) {
      console.log(error);
      res.send('An error occured', error);
    });
  });

// GET Request to api/cards/matched?id='id'
// Expects id
// On success returns a JSON object with potential mathces
  app.get('/api/cards/matched', function(req, res) {
    new Cards()
    .where({
      interest: 'True',
      users_id: req.query.id
    })
    .fetchAll().then(function(cards) {
      res.send(cards.toJSON());
    }).catch(function(error) {
      console.log(error);
      res.send('An error occured', error);
    });
  });

// Default route
  app.get('*', function(req, res) {
    res.sendfile('./public/views/404.html')
  })

};