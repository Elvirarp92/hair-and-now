const mongoose = require('mongoose')
const Schema = mongoose.Schema

const packSchema = new Schema(
  {
    services: { type: [Schema.Types.ObjectId], ref: 'Service' },
    price: Number,
  },
  { timestamps: true }
)

const Pack = mongoose.model('Pack', packSchema)

module.exports = Pack
