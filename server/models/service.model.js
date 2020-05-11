const mongoose = require('mongoose')
const Schema = mongoose.Schema

const serviceSchema = new Schema(
  {
    name: String,
    price: Number,
    estimatedTime: Number, //minutes
  },
  { timestamps: true }
)

const Service = mongoose.model('Service', serviceSchema)

module.exports = Service