// backend/models/Comment.js
const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  photoId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Photo',
  },
  text: {
    type: String,
    required: true,
  },
},
{
  timestamps: true,
}
);

const commentModel = mongoose.model('comments', CommentSchema)
module.exports = commentModel