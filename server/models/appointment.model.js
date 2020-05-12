const mongoose = require('mongoose')
const Schema = mongoose.Schema

const appointmentSchema = new Schema(
  {
    services: { type: [Schema.Types.ObjectId], ref: 'Service' },
    dates: { type: [Date] },
    validated: { type: Boolean, default: false },
  },
  { timestamps: true }
)

const Appointment = mongoose.model('Appointment', appointmentSchema)

module.exports = Appointment
