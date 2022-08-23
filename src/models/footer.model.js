const mongoose = require('mongoose');

const footerSchema = new mongoose.Schema({
	container: [
		{
			heading: { type: String, required: true },
			title: { type: String, required: true },
			icon: { type: String },
		},
	],
	logoImg: { type: String, required: true },
	icon: { type: String, required: true },
	text: { type: String, required: true },
});

module.exports = mongoose.model('Footer', footerSchema);
