const express = require('express')
const router = express.Router


//READ
router.get('/getsaloncomments/:salonId', (req, res, next) => {
  /*WIP*/
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