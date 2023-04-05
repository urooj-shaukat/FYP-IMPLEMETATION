var express = require('express');
var router = express.Router();
var UserController = require('../controllers/UserController')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/signup', UserController.dashboard );
router.post('/signin', UserController.dashboard)
module.exports = router;
