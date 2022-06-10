const router = require('express').Router();
const postController = require('../controllers/post.controller');



router.get('/' , postController.getPosts )

router.post('/add' ,   postController.postToDO)


router.get('/delete/:id' , postController.deletePost)


module.exports =router