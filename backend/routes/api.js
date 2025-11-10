const express = require('express');
const router = express.Router();
const Mood = require('../models/Mood');
const Recipe = require('../models/Recipe');

// POST /mood - submit user's mood
router.post('/mood', async (req, res) => {
  try {
    const { userId, moodType, intensity } = req.body;
    if (!userId || !moodType) return res.status(400).json({ error: 'userId and moodType are required' });
    const mood = new Mood({ userId, moodType, intensity });
    await mood.save();
    res.status(201).json({ message: 'Mood recorded' });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /recipes?mood=Happy - get recipes recommended for mood
router.get('/recipes', async (req, res) => {
  try {
    const mood = req.query.mood;
    if (!mood) return res.status(400).json({ error: 'Mood query parameter is required' });
    // simple matching recipes by mood tag
    const recipes = await Recipe.find({ moodTags: mood }).limit(10);
    res.json({ recipes });
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
