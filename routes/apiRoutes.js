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

	app.post('/api/workouts', (req, res) => {
		db.create({}).then((dbWorkouts) => {
			res.json(dbWorkouts);
		});
	});
	app.put('/api/workouts/:id', (req, res) => {
		db
			.update({ _id: req.params.id }, { $push: { exercises: req.body } })
			.then((data) => {
				res.json(data);
			});
	});
};
