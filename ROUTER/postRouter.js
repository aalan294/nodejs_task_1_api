const express = require('express')
const router = express.Router()

router.route('/')
    .get(require('../CONTROLLERS/postController').getAllPosts)
    .post(require('../CONTROLLERS/postController').newPost)

router.route('/:id')
    .get(require('../CONTROLLERS/postController').getPost)
    .put(require('../CONTROLLERS/postController').updatePost)
    .delete(require('../CONTROLLERS/postController').deletePost)

router.route('/:id/likes')
    .post(require('../CONTROLLERS/postController').addLikes)

router.route('/:id/comments')
    .post(require('../CONTROLLERS/postController').addComments)

module.exports = router