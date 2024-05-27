
const Comment = require('../Models/commentModel');

const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ photoId: req.params.photoId });
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch comments' });
  }
};

const addComment = async (req, res) => {
  try {
    const newComment = new Comment({
      photoId: req.params.photoId,
      text: req.body.text,
    });
    const savedComment = await newComment.save();
    res.json(savedComment);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add comment' });
  }
};

module.exports = { getComments, addComment };
