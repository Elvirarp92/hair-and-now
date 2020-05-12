const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    password: Object,
    keyId: Number, /*this allows us to have several keys available for hashing at a time - we do not 
    at the moment, but now our program is more scalable!*/
    email: { type: String, required: true },
    status: {
      type: String,
      enum: ['active', 'pending confirmation'],
      default: 'pending confirmation',
    },
    confirmationCode: String,
    role: {
      type: String,
      enum: ['client', 'professional'],
      default: 'client',
    },
    appointments: { type: [Schema.Types.ObjectId], ref: 'Appointment' },
  },
  {
    timestamps: true,
  }
)

const User = mongoose.model('User', userSchema)

module.exports = User
