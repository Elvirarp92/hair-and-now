const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema(
  {
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    title: String,
    text: String,
    postedInSalon: { type: Schema.Types.ObjectId, ref: 'Salon' },
    postedInPost: { type: Schema.Types.ObjectId, ref: 'Post' },
  },
  { timestamps: true }
)

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment
