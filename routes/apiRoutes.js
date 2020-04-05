const db = require('../models/workout');

module.exports = function(app) {
	app.get('/api/workouts', function(req, res) {
		db.find({}).then(function(dbWorkouts) {
			res.json(dbWorkouts);
		});
	});
	app.get('/api/workouts/range', function(req, res) {
		db.find({}).then(function(dbWorkouts) {
			res.json(dbWorkouts);
		});
	});
};
