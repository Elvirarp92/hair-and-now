const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')
const ical = require('ical-generator')

const Appointment = require('./../models/appointment.model')
const User = require('./../models/user.model')
const Salon = require('./../models/salon.model')
const cal = ical({
  domain: 'hair-and-now.herokuapp.com',
  name: 'Cita peluquería',
  organizer: 'Hair & Now',
  timezone: 'Europe/Berlin',
})

const { checkLoggedIn, checkRole } = require('./../configs/authCheckers.config')

let transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.EMAIL,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
    accessToken: process.env.ACCESS_TOKEN,
  },
})

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
    .populate({
      path: 'services',
      model: 'Pack',
      populate: {
        path: 'services',
        model: 'Service',
      },
    })
    .then((appointment) => {
      res.json(appointment)
    })
    .catch((err) => {
      next(new Error(err))
    })
})

//CREATE
router.post('/postnewappt/:salonId', checkRole(['client']), (req, res, next) => {
  let appointmentObject = {
    services: [req.body.services],
    dates: req.body.dates,
    validated: false,
    clientEmail: req.user.email,
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
    .then(() => res.json({ message: 'Your appointment was successfully created!' }))
    .catch((err) => next(new Error(err)))
})

//UPDATE
router.post('/editappt/:id', checkLoggedIn, (req, res, next) => {
  let salonName
  if (req.user.role == 'client') {
    req.user.appointments.includes(req.params.id)
      ? null
      : res.status(403).json({
          message: `You do not have permissions to edit this appointment`,
        })
  } else if (req.user.role == 'professional') {
    Salon.findOne({ owner: req.user._id })
      .then((salon) => {
        salon && salon.appointments.includes(req.params.id)
          ? (salonName = salon.name)
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
      if (appointment.validated) {
        if (appointment.dates.length >= 1) {
          cal.createEvent({
            start: appointment.dates[0],
            end: appointment.estimatedEndTime,
            summary: 'Cita peluquería',
            prodId: appointment._id,
          })

          transporter.sendMail({
            from: process.env.EMAIL,
            to: [appointment.clientEmail, req.user.email],
            subject: `¡Cita en ${salonName} confirmada!`,
            text: `Tu cita en ${salonName} ha sido confirmada para la siguiente fecha: ${appointment.dates[0].toLocaleString(
              'es-ES'
            )}`,
            html: `<p>Tu cita en ${salonName} ha sido confirmada para la siguiente fecha: ${appointment.dates[0].toLocaleString(
              'es-ES'
            )}</p>`,
            icalEvent: {
              filename: 'appointment.ics',
              method: 'request',
              content: cal.toString(),
            },
          })
        } else if ((appointment.dates.length = 0)) {
          transporter.sendMail({
            from: process.env.EMAIL,
            to: appointment.clientEmail,
            subject: `No hemos podido concertar tu cita en ${salonName}`,
            text: `Ninguna de las fechas propuestas era válida para tu cita en ${salonName}. ¡Prueba a volver a pedir cita!`,
            html: `<p>Ninguna de las fechas propuestas era válida para tu cita en ${salonName}. ¡Prueba a volver a pedir cita!</p>`,
          })
        }
      }

      return appointment
    })
    .then((appointment) => res.json(appointment))
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
    })
    .catch((err) => {
      next(new Error(err))
    })
})

module.exports = router
