const express = require('express')
const router = express.Router()

const Appointment = require('./../models/appointment.model')
const User = require('./../models/user.model')
const Salon = require('./../models/salon.model')

const { checkRole } = require('./../configs/authCheckers.config')

//READ
router.get('/getuserappts/:id', (req, res, next) => {
  User.findById(req.params.id)
    .then((client) => {
      res.json(client.appointments)
    })
    .catch((err) => {
      next(new Error(err))
    })
})

router.get('/getappt/:id', (req, res, next) => {
  Appointment.findById(req.params.id)
    .then((appointment) => {
      res.json(appointment)
    })
    .catch((err) => {
      next(new Error(err))
    })
})

//CREATE
router.post(
  '/postnewappt/:salonId',
  checkRole(['client']),
  (req, res, next) => {
    let appointmentObject = {
      services: [req.body.services],
      dates: [req.body.dates],
      validated: false,
    }

    Appointment.create(appointmentObject)
      .then((createdAppt) => {
        console.log(createdAppt)
        appointmentObject = createdAppt
        return Salon.findByIdAndUpdate(req.params.salonId, {
          $push: { appointments: createdAppt._id },
        })
      })
      .then(() => {
        console.log(`appointment object: ${appointmentObject}`)
        return User.findByIdAndUpdate(req.user.id, {
          $push: { appointments: appointmentObject._id },
        })
      })
      .then(() =>
        res.json({ message: 'Your appointment was successfully created!' })
      )
      .catch((err) => {
        next(new Error(err))
      })
  }
)

//UPDATE
router.post('/editappt/:id', (req, res, next) => {
  /*WIP*/
})

//DELETE
router.post('/deleteappt/:id', (req, res, next) => {
  /*WIP*/
})

module.exports = router
