const session = require('express-session')
const passport = require('passport')
const crypto = require('crypto')
const LocalStrategy = require('passport-local').Strategy
const flash = require('connect-flash')

const User = require('../models/user.model')

module.exports = (app) => {
  app.use(
    session({
      secret: 'passport-app-webmad0320',
      resave: true,
      saveUninitialized: true,
    })
  )

  passport.serializeUser((user, next) => next(null, user._id))
  passport.deserializeUser((id, next) => {
    User.findById(id)
      .then((theUser) => next(null, theUser))
      .catch((err) => next(err))
  })

  app.use(flash())

  passport.use(
    new LocalStrategy(
      { passReqToCallback: true },
      (req, username, password, next) => {
        console.log(username)
        User.findOne({ username })
          .then((user) => {
            console.log(`usuario: ${user} cuyo nombre: ${user.username} y contraseña ${user.password}`)
            const cipheredPassword = crypto.createHmac(
              'sha512',
              process.env.CRYPTOKEY1
            )
            cipheredPassword.update(password)
            const digestedPassword = cipheredPassword.digest('base64')

            console.log(`contraseña cifrada: ${digestedPassword}`)

            if (!user) {
              return next(null, false, {
                message: 'Nombre de usuario incorrecto',
              })
            }
            if (digestedPassword != user.password) {
              return next(null, false, { message: 'Contraseña incorrecta' })
            }
            return next(null, user)
          })
          .catch((err) => next(err))
      }
    )
  )

  app.use(passport.initialize())
  app.use(passport.session())
}
