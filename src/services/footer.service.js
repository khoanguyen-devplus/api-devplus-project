const { footerModel } = require('../models');

const getFooter = async () => {
	const footer = await footerModel.find();
	return footer;
};

const postFooter = async (body) => {
	const newFooter = new footerModel(body);
	const savedFooter = await newFooter.save();
	return savedFooter;
};

const putFooter = async (id, body) => {
	const updatedFooter = await footerModel.findByIdAndUpdate(
		id,
		{
			$set: body,
		},
		{ new: true }
	);
	return updatedFooter;
};

const deleteFooter = async (id) => {
	await footerModel.findByIdAndDelete(id);
	return 'This footer has been deleted!';
};

module.exports = {
	getFooter,
	postFooter,
	putFooter,
	deleteFooter,
};
