let router = require('express').Router();
var userController = require('../controller/userController');

router.route('/users')
    .get(userController.index)
    .post(userController.new)

router.route('/users/:user_id')
    .get(userController.view)
    .patch(userController.update)
    .put(userController.update)
    .delete(userController.delete);

// Export API routes
module.exports = router;