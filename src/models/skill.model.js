const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
	container: [
		{
			image: { type: String, required: true },
			title: { type: String, required: true },
			desc: { type: String, required: true },
		},
	],
});

module.exports = mongoose.model('Skill', skillSchema);
