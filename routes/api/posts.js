var express = require('express');
var router = express.Router();
const postsCtrl = require('../../controllers/posts');


/*---------- Public Routes ----------*/
router.post('/create', postsCtrl.create);



/*---------- Protected Routes ----------*/


module.exports = router;