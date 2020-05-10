const express = require('express')
const router = express.Router

//READ
router.get('/getsalonposts/:salonId', (req, res, next) => {
  /*WIP*/
})

router.get('/getpost/:id', (req, res, next) => {
  /*WIP*/
})

//CREATE
router.post('/postnewpost/:salonId', (req, res, next) => {
  /*WIP*/
})

//UPDATE
router.post('/editpost/:postId', (req, res, next) => {
  /*WIP*/
})

//DELETE
router.post('/deletepost/:postId', (req, res, next) => {
  /*WIP*/
})

module.exports = router
