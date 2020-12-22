let router = require('express').Router();
var userController = require('../controller/userController');

router.route('/users')
    .get(userController.index)
    .post(userController.new)

// Export API routes
module.exports = router;