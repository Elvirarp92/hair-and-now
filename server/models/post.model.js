const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema(
  {
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    associatedSalon: { type: Schema.Types.ObjectId, ref: 'Salon' },
    title: String,
    text: String,
    comments: { type: [Schema.Types.ObjectId], ref: 'Comment' },
  },
  { timestamps: true }
)

const Post = mongoose.model('Post', postSchema)

module.exports = Post
