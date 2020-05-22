const express = require('express')
const router = express.Router()

const Comment = require('./../models/comment.model')

const { checkLoggedIn } = require('./../configs/authCheckers.config')

//READ
router.get('/getcomments/:id', (req, res, next) => {
  Comment.find({ postedIn: req.params.id })
    .then((comments) => res.json(comments))
    .catch((err) => next(new Error(err)))
})

//CREATE
router.post('/postnewcomment/:id', checkLoggedIn, (req, res, next) => {
  const commentBody = {
    owner: req.user.id,
    title: req.body.title,
    text: req.body.text,
    postedIn: req.params.id,
  }

  Comment.create(commentBody)
    .then((comment) => res.json(comment))
    .catch((err) => next(new Error(err)))
})

//UPDATE
// router.post('/editcomment/:commentId', (req, res, next) => {
//   /*WIP*/
// })

//DELETE
router.post('/deletecomment/:id', checkLoggedIn, (req, res, next) => {
  Comment.findById(req.params.id)
    .then((comment) =>
      comment.owner == req.user.id
        ? comment._id
        : res.status(403).json({
            message: `You do not have permissions to delete this comment`,
          })
    )
    .then((commentId) => Comment.findByIdAndDelete(commentId))
    .then(() => res.status(200).json({ message: 'Deletion was successful!' }))
    .catch((err) => next(new Error(err)))
})

module.exports = router
