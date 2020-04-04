const db = require('../models/workout');

module.exports = function(app) {
	app.get('/api/workouts', function(req, res) {
		db.Workouts.find({}).then(function(dbWorkouts) {
			res.json(dbWorkouts);
		});
	});
};
