const router = require('express').Router();
const user_routes = require('./user');
const message_routes = require('./message');

router.use('/user', user_routes)
router.use('/message', message_routes)

module.exports = router;