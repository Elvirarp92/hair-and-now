const express = require('express')
const router = express.Router


//READ
router.get('/getclientappts/:clientId', (req, res, next) => {
  /*WIP*/
})

router.get('/getsalonappts/:salonId', (req, res, next) => {
  /*WIP*/
})

router.get('/getappt/:id', (req, res, next) => {
  /*WIP*/
})

//CREATE
router.post('/postnewappt', (req, res, next) => {
  /*WIP*/
})

//UPDATE
router.post('/editappt/:id', (req, res, next) => {
  /*WIP*/
})

//DELETE
router.post('/deleteappt/:id', (req, res, next) => {
  /*WIP*/
})

module.exports = router