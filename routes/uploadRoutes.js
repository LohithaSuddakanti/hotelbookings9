// File: routes/uploadRoute.js

const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');

// Image upload route
router.post('/upload', upload.single('image'), (req, res) => {
  try {
    const imageUrl = req.file.path; // Path of the uploaded image
    res.json({ imageUrl: imageUrl });
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({ message: 'Failed to upload image' });
  }
});

module.exports = router;
