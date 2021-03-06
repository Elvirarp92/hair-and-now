const express = require('express')
const router = express.Router()
const passport = require('passport')
const crypto = require('crypto')
const nodemailer = require('nodemailer')

const { v4: uuidv4 } = require('uuid')

const User = require('./../models/user.model')

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
      message: 'Please make your password at least 8 characters long for security purposes.',
    })
    return
  }

  User.findOne({ $or: [{ username }, { email }] }, (err, foundUser) => {
    if (err) {
      res.status(500).json({ message: 'Username/email check went bad.' })
      return
    }

    if (foundUser) {
      res.status(400).json({ message: 'Username or email taken. Choose another one(s).' })
      return
    }

    const hmac = crypto.createHmac('sha512', process.env.CRYPTOKEY1)
    hmac.update(password)

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
      enlace: http://localhost:3000/confirm/${user.confirmationCode}`,
            html: `<p>Para poder acceder a Hair&Now con tu usuario y contraseña, 
      por favor, confirma tu registro en 
      <a href="http://localhost:3000/confirm/${user.confirmationCode}">
      el siguiente enlace.</a></p>`,
          })
        } else if (user.role == 'professional') {
          transporter.sendMail({
            from: process.env.EMAIL,
            to: user.email,
            subject: 'Hemos recibido tu solicitud de registro a Hair&Now ⌚',
            text: `Necesitamos comprobar si la dirección que has introducido para tu local 
            es válida antes de enviar el código de confirmación. En un plazo de 24 a 72 
            horas te enviaremos una respuesta. ¡Gracias por tu paciencia!`,
            html: `<p>Necesitamos comprobar si la dirección que has introducido para tu 
            local es válida antes de enviar el código de confirmación. En un plazo de 24 a 
            72 horas te enviaremos una respuesta. ¡Gracias por tu paciencia!</p>`,
          })
        }
      })
      .then((user) => res.status(200).json(user))
      .catch((err) => res.status(400).json({ message: 'Saving user to database went wrong.' }))
  })
})

//User confirmation
router.get('/confirm/:confirmCode', (req, res, next) => {
  User.findOneAndUpdate({ confirmationCode: req.params.confirmCode }, { status: 'active' })
    .then((user) => {
      req.login(user, (err) => {
        if (err) {
          res.status(500).json({ message: 'Session save went bad.' })
          return
        }

        res.status(200).json(user)
      })
    })
    .catch((err) =>
      res.status(500).json({ message: 'Something went wrong while updating the user.' })
    )
})

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, failureDetails) => {
    if (err) {
      res.status(500).json({ message: 'Something went wrong on user authentication.' })
      return
    }
    if (!user) {
      res.status(401).json(failureDetails)
      return
    }

    req.login(user, (err) => {
      if (err) {
        res.status(500).json({ message: 'Session save went bad.' })
      }
      res.status(200).json(user)
    })
  })(req, res, next)
})

router.post('/logout', (req, res, next) => {
  req.logout()
  res.status(200).json({ message: 'Log out success!' })
})

//checks whether there's a logged in user in this browser session
router.get('/isloggedin', (req, res, next) => {
  if (req.isAuthenticated()) {
    res.status(200).json(req.user)
    return
  }
  res.status(403).json({ message: 'Unauthorized' })
})

module.exports = router
