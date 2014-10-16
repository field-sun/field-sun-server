module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('/', function(req, res) {
		res.sendfile('./public/index.html');
	});

	app.get('/user/1', function(req, res){
		res.send({
			fName: 'Josh',
			lName: 'Lankford',
			language: 'JavaScript',
			location: 'San Francisco'
		})
	})

	app.get('/company/1', function(req, res){
		res.send({
			cName: 'Example',
			language: 'JavaScript',
			location: 'San Francisco'
		})
	})

};