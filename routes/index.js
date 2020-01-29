const router = require('express').Router();
const api_routes = require('./api');
const path = require('path')

router.use('/api', api_routes);

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;