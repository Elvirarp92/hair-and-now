const express = require('express')
const router = express.Router()

const Comment = require('./../models/comment.model')

const { checkLoggedIn, checkRole } = require('./../configs/authCheckers.config')

//READ
router.get('/getcomments/:id', (req, res, next) => {
  Comment.find({ postedIn: req.params.id })
    .then((comments) => {
      res.json(comments)
    })
    .catch((err) => {
      next(new Error(err))
    })
})

//CREATE
router.post('/postnewcomment/:id', checkLoggedIn, (req, res, next) => {
  const commentBody = {
    owner: req.user._id,
    title: req.body.title,
    text: req.body.text,
    postedIn: req.params.id,
  }

  Comment.create(commentBody)
    .then((comment) => {
      res.json(comment)
    })
    .catch((err) => {})
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
