var express = require('express');
var router = express.Router();
const postsCtrl = require('../../controllers/posts');
const auth = require('../../config/auth');

/*---------- Public Routes ----------*/

router.post('/create', auth, postsCtrl.create);

/*---------- Protected Routes ----------*/

module.exports = router;
