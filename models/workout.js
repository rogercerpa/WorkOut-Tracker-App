const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
	day       : {
		type    : Date,
		require : true,
		default : Date.now
	},
	exercises : [
		{
			type     : { type: String, required: true },
			name     : { type: String, required: true },
			duration : Number,
			weight   : Number,
			reps     : Number,
			sets     : Number,
			distance : Number
		}
	]
});
const workoutSchema = new Schema(data, {
	toJSON : {
		virtuals : true
	}
});

workoutSchema.virtual('totalDuration').get(function() {
	return this.exercises.reduce((total, exercise) => {
		return total + exercise.duration;
	}, 0);
});

const Workouts = mongoose.model('workouts', workoutSchema);

module.exports = Workouts;
