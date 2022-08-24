const router = require('express').Router();
const { footerController } = require('../controllers');

router.route('/').get(footerController.getFooter).post(footerController.createFooter);

router.route('/:id').put(footerController.updateFooter).delete(footerController.removeFooter);

module.exports = router;
