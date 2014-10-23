module.exports = function(app) {

	app.get('/', function(req, res) {
		res.sendfile('./public/index.html');
	});

	app.get('/api/user/1', function(req, res){
		res.send({
			fName: 'Josh',
			lName: 'Lankford',
			language: 'JavaScript',
			location: 'San Francisco'
		})
	})

	app.get('/api/company/1', function(req, res){
		res.send({
			cName: 'Example',
			language: 'JavaScript',
			location: 'San Francisco'
		})
	})

	app.get('*', function(req, res){
		res.sendfile('./public/views/404.html')
	})

};