const router = require('express').Router();
const { skillController } = require('../controllers');

router.route('/').get(skillController.getSkill).post(skillController.createSkill);

router.route('/:id').put(skillController.updateSkill).delete(skillController.removeSkill);

module.exports = router;
