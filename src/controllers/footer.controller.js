const { footerService } = require('../services');

const getFooter = async (req, res, next) => {
	try {
		res.status(200).json(await footerService.getFooter());
	} catch (error) {
		res.status(404).json(error);
	}
};

const createFooter = async (req, res, next) => {
	const footerBody = req.body;
	try {
		res.status(200).json(await footerService.postFooter(footerBody));
	} catch (error) {
		res.status(500).json(error);
	}
};

const updateFooter = async (req, res, next) => {
	const footerId = req.params.id;
	const footerBody = req.body;
	try {
		res.status(200).json(await footerService.putFooter(footerId, footerBody));
	} catch (error) {
		res.status(500).json(error);
	}
};

const removeFooter = async (req, res, next) => {
	const footerId = req.params.id;
	try {
		res.status(204).json(await footerService.deleteFooter(footerId));
	} catch (error) {
		res.status(404).json(error);
	}
};

module.exports = {
	getFooter,
	createFooter,
	updateFooter,
	removeFooter,
};
