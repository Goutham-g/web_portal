const express = require('express');
const router = express.Router();
const { getComments, addComment } = require('../Controllers/commentController');


router.get('/:photoId', getComments);

router.post('/:photoId', addComment);

module.exports = router;
