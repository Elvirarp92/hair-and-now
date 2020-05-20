const express = require('express')
const router = express.Router()

const { checkRole } = require('./../configs/authCheckers.config')

const Pack = require('./../models/pack.model')
const Salon = require('./../models/salon.model')

//Redundant?
router.get('/getpacks/:salonId', (req, res, next) => {
  Pack.find({ salon: req.params.salonId })
    .populate({
      path: 'services',
      model: 'Service',
    })
    .then((packs) => res.json(packs))
    .catch((err) => next(new Error(err)))
})

//Get specific pack
router.get('/getpack/:id', (req, res, next) => {
  Pack.findById(req.params.id)
    .then((pack) => res.json(pack))
    .catch((err) => next(new Error(err)))
})

router.post('/postnewpack/:salonId', checkRole(['professional']), (req, res, next) => {
  Salon.findById(req.params.salonId)
    .then((salon) =>
      salon.owner == req.user.id
        ? salon._id
        : res.status(403).json({
            message: `You do not have permissions to add packs to this salon`,
          })
    )
    .then((salonId) => {
      const newPack = {
        salon: salonId,
        services: req.body.services,
        price: req.body.price,
      }
      Pack.create(newPack)
    })
    .then((pack) => res.json(pack))
    .catch((err) => next(new Error(err)))
})

router.post('/editpack/:id', checkRole(['professional']), (req, res, next) => {
  Pack.findById(req.params.id)
    .then((pack) =>
      pack.salon == req.user.id
        ? pack._id
        : res.status(403).json({
            message: `You do not have permissions to add packs to this salon`,
          })
    )
    .then((packId) => Pack.findByIdAndUpdate(packId, req.body, { new: true }))
    .then((pack) => res.json(pack))
    .catch((err) => next(new Error(err)))
})

router.post('/deletepack/:id', checkRole(['professional']), (req, res, next) => {
  Pack.findById(req.params.id)
    .then((pack) =>
      pack.salon == req.user.id
        ? pack._id
        : res.status(403).json({
            message: `You do not have permissions to add packs to this salon`,
          })
    )
    .then((packId) => Pack.findByIdAndDelete(packId))
    .then(() => res.json({ message: 'Deletion successful!' }))
    .catch((err) => next(new Error(err)))
})

module.exports = router
