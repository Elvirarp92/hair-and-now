const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema(
  {
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    title: String,
    text: String,
  },
  { timestamps: true }
)

const Post = mongoose.model('Post', postSchema)

module.exports = Post
