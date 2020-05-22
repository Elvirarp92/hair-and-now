const express = require('express')
const router = express.Router()

const { checkLoggedIn, checkRole } = require('./../configs/authCheckers.config')

const Salon = require('./../models/salon.model')

//READ
/* (need specific route for querying salons for management, which needs 
  all this deep population to work properly) */
router.get('/getsalons/search', (req, res, next) => {
  Salon.find(req.query)
    .populate({
      path: 'appointments',
      model: 'Appointment',
      populate: {
        path: 'services',
        model: 'Pack',
        populate: {
          path: 'services',
          model: 'Service',
        },
      },
    })
    .then((salons) => res.json(salons))
    .catch((err) => next(new Error(err)))
})

router.get('/getsalon/:id', (req, res, next) => {
  Salon.findById(req.params.id)
    .then((salon) => res.json(salon))
    .catch((err) => next(new Error(err)))
})

//CREATE
router.post('/postnewsalon', checkRole(['professional']), (req, res, next) => {
  const { name, type, address, schedule } = req.body

  const newSalon = {
    name,
    type,
    address,
    schedule,
    owner: req.user.id,
  }

  Salon.create(newSalon)
    .then((salon) => res.json(salon))
    .catch((err) => next(new Error(err)))
})

//UPDATE
router.post('/editsalon/:id', checkLoggedIn, (req, res, next) => {
  Salon.findById(req.params.id)
    .then((salon) =>
      salon.owner == req.user.id
        ? salon._id
        : res.status(403).json({
            message: `You do not have permissions to edit this salon`,
          })
    )
    .then((salonId) => Salon.findByIdAndUpdate(salonId, req.body, { new: true }))
    .then((salon) => res.json(salon))
    .catch((err) => next(new Error(err)))
})

//DELETE
router.post('/deletesalon/:id', checkLoggedIn, (req, res, next) => {
  Salon.findById(req.params.id)
    .then((salon) =>
      salon.owner == req.user.id
        ? salon._id
        : res.status(403).json({
            message: `You do not have permissions to delete this salon`,
          })
    )
    .then((salonId) => Salon.findByIdAndDelete(salonId))
    .then(() => res.json({ message: `Salon document ${req.params.id} deleted!` }))
    .catch((err) => next(new Error(err)))
})

module.exports = router
