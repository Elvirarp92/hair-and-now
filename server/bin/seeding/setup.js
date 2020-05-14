const colonize = require('colonize')
const path = require('path')
require('dotenv').config()

const mongoUrl = `${process.env.DB}`

const colonization = colonize.initialize({
  mongoUrl,
  seedingPath: path.resolve(__dirname),
  connectionWhitelist: [mongoUrl],
})

colonization.seed()
.then(() => {
  console.log("seed funciona! (?)")
  colonization.close()
}).catch((err) => {
  console.log(err)
});