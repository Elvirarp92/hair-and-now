const mongoose = require('mongoose')
const Schema = mongoose.Schema

const appointmentSchema = new Schema(
  {
    services: { type: [String] },
    dates: { type: [Date] },
    validated: { type: Boolean, default: false },
  },
  { timestamps: true }
)

const Appointment = mongoose.model('Appointment', appointmentSchema)

module.exports = Appointment
