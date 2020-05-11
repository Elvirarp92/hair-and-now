const mongoose = require('mongoose')
const Schema = mongoose.Schema

const serviceSchema = new Schema(
  {
    name: String,
    estimatedTime: Number, //minutes
  },
  { timestamps: true }
)

const Service = mongoose.model('Service', serviceSchema)

module.exports = Service