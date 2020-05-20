const express = require('express')
const router = express.Router()

const Appointment = require('./../models/appointment.model')
const User = require('./../models/user.model')
const Salon = require('./../models/salon.model')

const { checkLoggedIn, checkRole } = require('./../configs/authCheckers.config')

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
      dates: req.body.dates,
      validated: false,
    }

    Appointment.create(appointmentObject)
      .then((createdAppt) => {
        appointmentObject = createdAppt
        return Salon.findByIdAndUpdate(req.params.salonId, {
          $push: { appointments: createdAppt._id },
        })
      })
      .then(() => {
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
router.post('/editappt/:id', checkLoggedIn, (req, res, next) => {
  if (req.user.role == 'client') {
    req.user.appointments.includes(req.params.id)
      ? null
      : res.status(403).json({
          message: `You do not have permissions to edit this appointment`,
        })
  } else if (req.user.role == 'professional') {
    Salon.findOne({ owner: req.user.role })
      .then((salon) => {
        salon && salon.appointments.includes(req.params.id)
          ? null
          : res.status(403).json({
              message: `You do not have permissions to edit this appointment`,
            })
      })
      .catch((err) => {
        next(new Error(err))
      })
  }
  Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((appointment) => {
      res.json(appointment)
    })
    .catch((err) => {
      next(new Error(err))
    })
})

//DELETE
router.post('/deleteappt/:id', checkLoggedIn, (req, res, next) => {
  if (req.user.role == 'client') {
    req.user.appointments.includes(req.params.id)
      ? null
      : res.status(403).json({
          message: `You do not have permissions to delete this appointment`,
        })
  } else if (req.user.role == 'professional') {
    Salon.findOne({ owner: req.user.role })
      .then((salon) => {
        salon && salon.appointments.includes(req.params.id)
          ? null
          : res.status(403).json({
              message: `You do not have permissions to delete this appointment`,
            })
      })
      .catch((err) => {
        next(new Error(err))
      })
  }

  Appointment.findByIdAndDelete(req.params.id)
  .then(() => {
    res.json({ message: `Appointment document ${req.params.id} deleted!` })
  }).catch((err) => {
    next(new Error(err))
  });

})

module.exports = router
