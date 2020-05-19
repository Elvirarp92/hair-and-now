const express = require('express')
const router = express.Router()

const Service = require('./../models/service.model')

router.get('/getservices', (req, res, next) => {
  Service.find()
    .then((services) => res.json(services))
    .catch((err) => next(new Error(err)))
})

module.exports = router
