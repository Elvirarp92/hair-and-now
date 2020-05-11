const mongoose = require('mongoose')
const Schema = mongoose.Schema

const salonSchema = new Schema(
  {
    name: { type: String, required: true },
    type: {
      type: String,
      enum: ['peluquería de señoras', 'barbería', 'peluquería unisex', 'otro'],
      required: true,
    },
    street: { type: String, required: true },
    addressNumber: { type: Number, required: true },
    zipcode: { type: Number, required: true },
    town: { type: String, required: true },
    province: { type: String, required: true },
    addressComplements: String,
    schedule: {
      "monday": {
        openingDay: Boolean,
        openingTime: String,
        closingTime: String,
      },
      "tuesday":{
        openingDay: Boolean,
        openingTime: String,
        closingTime: String,
      },
      "wednesday":{
        openingDay: Boolean,
        openingTime: String,
        closingTime: String,
      },
      "thursday":{
        openingDay: Boolean,
        openingTime: String,
        closingTime: String,
      },
      "friday":{
        openingDay: Boolean,
        openingTime: String,
        closingTime: String,
      },
      "saturday":{
        openingDay: Boolean,
        openingTime: String,
        closingTime: String,
      },
      "sunday":{
        openingDay: Boolean,
        openingTime: String,
        closingTime: String,
      },
    },
    services: { type: [Schema.Types.ObjectId], ref: 'Service' },
    rating: Number,
    socialMediaHandles: { type: Map, of: String },
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    photos: Array,
    posts: { type: [Schema.Types.ObjectId], ref: 'Post' },
    comments: { type: [Schema.Types.ObjectId], ref: 'Comment' },
  },
  { timestamps: true }
)

const Salon = mongoose.model('Salon', salonSchema)

module.exports = Salon
