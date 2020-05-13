const checkLoggedIn = (req, res, next) =>
  req.isAuthenticated()
    ? next()
    : res.status(401).json({ message: 'You are not logged in' })

const checkRole = (roles) => (req, res, next) =>
  req.isAuthenticated() && roles.includes(req.user.role)
    ? next()
    : res.status(403).json({ message: `You need to be ${roles} to be here` })

exports.checkLoggedIn = checkLoggedIn
exports.checkRole = checkRole