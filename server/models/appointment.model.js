const mongoose = require('mongoose')
const Schema = mongoose.Schema

const appointmentSchema = new Schema(
  {
    services: { type: [Schema.Types.ObjectId], ref: 'Pack' },
    dates: { type: [Date] },
    estimatedEndTime: Date
    validated: { type: Boolean, default: false },
    clientEmail: String
  },
  { timestamps: true }
)

const Appointment = mongoose.model('Appointment', appointmentSchema)

module.exports = Appointment
