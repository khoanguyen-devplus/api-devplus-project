const { skillModel } = require('../models/');

const getSkill = async () => {
	const skill = await skillModel.find();
	return skill;
};

const postSkill = async (body) => {
	const newSkill = new skillModel(body);
	const savedSkill = await newSkill.save();
	return savedSkill;
};

const putSkill = async (id, body) => {
	const updatedSkill = await skillModel.findByIdAndUpdate(
		id,
		{
			$set: body,
		},
		{ new: true }
	);
	return updatedSkill;
};

const deleteSkill = async (id) => {
	await skillModel.findByIdAndDelete(id);
	return 'This skill has been deleted!';
};

module.exports = {
	getSkill,
	postSkill,
	putSkill,
	deleteSkill,
};
