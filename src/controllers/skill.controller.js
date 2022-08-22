const { skillService } = require('../services');

const getSkill = async (req, res, next) => {
	try {
		res.status(200).json(await skillService.getSkill());
	} catch (error) {
		res.status(404).json(error);
	}
};

const createSkill = async (req, res, next) => {
	const skillBody = req.body;
	try {
		res.status(200).json(await skillService.postSkill(skillBody));
	} catch (error) {
		res.status(500).json(error);
	}
};

const updateSkill = async (req, res, next) => {
	const skillId = req.params.id;
	const skillBody = req.body;
	try {
		res.status(200).json(await skillService.putSkill(skillId, skillBody));
	} catch (error) {
		res.status(500).json(error);
	}
};

const removeSkill = async (req, res, next) => {
	const skillId = req.params.id;
	try {
		res.status(204).json(await skillService.deleteSkill(skillId));
	} catch (error) {
		res.status(404).json(error);
	}
};

module.exports = {
	getSkill,
	createSkill,
	updateSkill,
	removeSkill,
};
