const service = require('./service')
const user = require('./user')
const appointment = require('./appointment')
const salon = require('./salon')
const comment = require('./comment')
const post = require('./post')
const pack = require('./pack')

module.exports = [
  { service },
  { appointment },
  { user },
  { comment },
  { post },
  { pack },
  { salon },
]
