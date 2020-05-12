const express = require('express')
const router = express.Router
const passport = require('passport')
const crypto = require('crypto')
const nodemailer = require('nodemailer')

import { v4 as uuidv4 } from 'uuid'

const User = require('./../models/user.model')

let transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL,
    password: process.env.PASSWORD,
  },
})

router.post('/signup', (req, res, next) => {
  const username = req.body.username
  const password = req.body.password
  const email = req.body.email
  const role = req.body.role

  if (!username || !password || !email) {
    res.status(400).json({ message: 'Provide username, password and email' })
    return
  }

  if (password.length < 8) {
    res.status(400).json({
      message:
        'Please make your password at least 8 characters long for security purposes.',
    })
    return
  }

  User.findOne({ username }, (err, foundUser) => {
    if (err) {
      res.status(500).json({ message: 'Username check went bad.' })
      return
    }

    if (foundUser) {
      res.status(400).json({ message: 'Username taken. Choose another one.' })
      return
    }
  })

  User.findOne({ email }, (err, foundUser) => {
    if (err) {
      res.status(500).json({ message: 'Email check went bad.' })
      return
    }

    if (foundUser) {
      res.status(400).json({ message: 'Email taken. Choose another one.' })
      return
    }
  })

  const hmac = crypto.createHmac('sha512', process.env.CRYPTOKEY1)
  hmac.update(password)

  //PENDING NODEMAILER

  User.create({
    username: username,
    password: hmac.digest('base64'),
    keyId: 1,
    email: email,
    role: role,
    confirmationCode: uuidv4(),
    status: 'pending confirmation',
  })
    .then((user) => {
      if (user.role == 'client') {
        transporter.sendMail({
          from: process.env.EMAIL,
          to: user.email,
          subject: 'Confirma tu registro a Hair&Now ☑️',
          text: `Para poder acceder a Hair&Now con tu usuario y contraseña, 
      por favor, confirma tu registro en el siguiente 
      enlace: http://localhost:5000/api/confirm/${user.confirmationCode}`,
          html: `<p>Para poder acceder a LabExpress con tu usuario y contraseña, 
      por favor, confirma tu registro en 
      <a href="http://localhost:5000/api/confirm/${user.confirmationCode}">
      el siguiente enlace.</a></p>`,
        })
      }
    })
    .then((user) => {
      res.status(200).json(user)
    })
    .catch((err) => {
      res.status(400).json({ message: 'Saving user to database went wrong.' })
    })
})

//User confirmation
router.get('/confirm/:confirmCode', (req, res, next) => {
  User.findOneAndUpdate(
    { confirmationCode: req.params.confirmationCode },
    { status: 'active' }
  )
    .then((user) => {
      req.login(user)
    })
    .then((user) => {
      res.status(200).json(user)
    })
    .catch((err) => {
      res.status(500).json({ message: 'Login after signup went bad.' })
    })
})

router.post('/login', (req, res, next) => {
  /*WIP*/
})

router.post('/logout', (req, res, next) => {
  /*WIP*/
})

router.get('/isloggedin', (req, res, next) => {
  /*WIP*/
})

module.exports = router
