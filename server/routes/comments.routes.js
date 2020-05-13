const express = require('express')
const router = express.Router()

const Salon = require('./../models/salon.model')
const Post = require('./../models/post.model')
const Comment = require('./../models/comment.model')

//READ
router.get('/getsaloncomments/:salonId', (req, res, next) => {
  Salon.findById(req.params.salonId)
    .then((salon) => {
      res.json(salon.comments)
    })
    .catch((err) => {
      next(new Error(err))
    })
})

router.get('/getpostcomments/:postId', (req, res, next) => {
  Post.findById(req.params.postId)
    .then((post) => {
      res.json(post.comments)
    })
    .catch((err) => {
      next(new Error(err))
    })
})

//CREATE
router.post('/postnewcomment/:salonId', (req, res, next) => {
  /*WIP*/
})

//UPDATE
router.post('/editcomment/:commentId', (req, res, next) => {
  /*WIP*/
})

//DELETE
router.post('/deletecomment/:commentId', (req, res, next) => {
  /*WIP*/
})

module.exports = router
