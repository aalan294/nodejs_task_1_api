const express = require('express')
const router = express.Router()

router.route('/')
    .get(require('../MIDDLEWARE/jwtVerify'),require('../CONTROLLERS/postController').getAllPosts)
    .post(require('../MIDDLEWARE/jwtVerify'),require('../CONTROLLERS/postController').newPost)

router.route('/:id')
    .get(require('../MIDDLEWARE/jwtVerify'),require('../CONTROLLERS/postController').getPost)
    .put(require('../MIDDLEWARE/jwtVerify'),require('../CONTROLLERS/postController').updatePost)
    .delete(require('../MIDDLEWARE/jwtVerify'),require('../CONTROLLERS/postController').deletePost)

router.route('/:id/likes')
    .post(require('../MIDDLEWARE/jwtVerify'),require('../CONTROLLERS/postController').addLikes)

router.route('/:id/comments')
    .post(require('../MIDDLEWARE/jwtVerify'),require('../CONTROLLERS/postController').addComments)

module.exports = router