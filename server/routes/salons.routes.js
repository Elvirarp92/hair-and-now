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
  Salon.create(req.body)
    .then((salon) => {
      res.json(salon)
    })
    .catch((err) => {
      console.log(err)
      next(new Error(err))
    })
})

//UPDATE
router.post('/editsalon/:id', (req, res, next) => {
  Salon.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((salon) => {
      res.json(salon)
    })
    .catch((err) => {
      next(new Error(err))
    })
})

//DELETE
router.post('/deletesalon/:id', (req, res, next) => {
  Salon.findByIdAndDelete(req.params.id)
    .then(() => {
      res.json({ message: `Salon document ${req.params.id} deleted!` })
    })
    .catch((err) => {
      next(new Error(err))
    })
})

module.exports = router
