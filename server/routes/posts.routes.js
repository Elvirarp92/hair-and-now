const express = require('express')
const router = express.Router()

const Salon = require('./../models/salon.model')
const Post = require('./../models/post.model')

const { checkLoggedIn, checkRole } = require('./../configs/authCheckers.config')

//READ
router.get('/getsalonposts/:salonId', (req, res, next) => {
  Salon.findById(req.params.salonId)
    .then((salon) => {
      res.json(salon.posts)
    })
    .catch((err) => {
      next(new Error(err))
    })
})

router.get('/getpost/:id', (req, res, next) => {
  Post.findById(req.params.id)
    .then((post) => {
      res.json(post)
    })
    .catch((err) => {
      next(new Error(err))
    })
})

//CREATE
router.post(
  '/postnewpost/:salonId',
  checkRole(['professional']),
  (req, res, next) => {
    const postObject = {
      owner: req.user.id,
      title: req.body.title,
      text: req.body.text,
    }

    Salon.findById(req.params.salonId)
      .then((salon) => {
        salon.owner == req.user.id
          ? null
          : res.status(403).json({
              message: `You do not have permissions to create a post here`,
            })
      })
      .then(() => {
        return Post.create(postObject)
      })
      .then((createdPost) => {
        return Salon.findByIdAndUpdate(req.params.salonId, {$push: { posts: createdPost._id }}, {
          new: true,
        })
      })
      .then(() => res.json({ message: 'Your post was successfully created!' }))
      .catch((err) => {
        next(new Error(err))
      })
  }
)

//UPDATE
router.post('/editpost/:postId', (req, res, next) => {
  /*WIP*/
})

//DELETE
router.post('/deletepost/:postId', (req, res, next) => {
  /*WIP*/
})

module.exports = router
