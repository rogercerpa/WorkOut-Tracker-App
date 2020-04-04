const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workOutSchema = new Schema({
	type     : { type: String, required: true },
	name     : { type: String, required: true },
	duration : { type: String },
	weight   : { type: String },
	reps     : { type: String },
	sets     : { type: String }
});

const Workouts = mongoose.model('workouts', workOutSchema);

module.exports = Workouts;
