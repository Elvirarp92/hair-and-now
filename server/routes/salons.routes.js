const express = require('express')
const router = express.Router()

const Salon = require('./../models/salon.model')

//READ
router.get('/getsalons/search', (req, res, next) => {
  Salon.find(req.query)
    .then((salons) => {
      res.json(salons)
    })
    .catch((err) => {
      next(new Error(err))
    })
})

router.get('/getsalon/:id', (req, res, next) => {
  Salon.findById(req.params.id)
    .then((salon) => {
      res.json(salon)
    })
    .catch((err) => {
      next(new Error(err))
    })
})

//CREATE
router.post('/postnewsalon', (req, res, next) => {
  /*WIP*/
})

//UPDATE
router.post('/editsalon/:id', (req, res, next) => {
  /*WIP*/
})

//DELETE
router.post('/deletesalon/:id', (req, res, next) => {
  /*WIP*/
})

module.exports = router
