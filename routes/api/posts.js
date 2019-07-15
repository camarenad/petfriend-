var express = require('express');
var router = express.Router();
const postsCtrl = require('../../controllers/posts');
const auth = require('../../config/auth');

/*---------- Public Routes ----------*/

/*---------- Protected Routes ----------*/
router.use(auth);
router.get('/index-animals',postsCtrl.indexAnimals)
router.post('/create-post', postsCtrl.createPost,checkAuth);
router.post('/upload-file/:postId', postsCtrl.uploadFile,checkAuth);

// helper function
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }
  

module.exports = router;
