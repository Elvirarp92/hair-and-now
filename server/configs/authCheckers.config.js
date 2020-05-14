const checkLoggedIn = (req, res, next) =>
  req.isAuthenticated() && req.user.status == 'active'
    ? next()
    : res.status(401).json({ message: 'You are not logged in, or your account is not validated' })

const checkRole = (roles) => (req, res, next) =>
  req.isAuthenticated() && roles.includes(req.user.role)
    ? next()
    : res.status(403).json({ message: `You need to be ${roles} to be here` })

exports.checkLoggedIn = checkLoggedIn
exports.checkRole = checkRole
