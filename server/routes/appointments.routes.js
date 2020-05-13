const express = require('express')
const router = express.Router()

const Appointment = require('./../models/appointment.model')
const User = require('./../models/user.model')

//READ
router.get('/getuserappts/:id', (req, res, next) => {
  User.findById(req.params.id)
  .then((client) => {
    res.json(client.appointments)
  }).catch((err) => {
    next(new Error(err))
  });
})

router.get('/getappt/:id', (req, res, next) => {
  Appointment.findById(req.params.id)
  .then((appointment) => {
    res.json(appointment)
  }).catch((err) => {
    next(new Error(err))
  });
})

//CREATE
router.post('/postnewappt', (req, res, next) => {
  /*WIP
  Appt creado debe ser añadido a usuario logado y a peluquería seleccionada
  */
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
