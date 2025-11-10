const mongoose = require('mongoose');

const moodSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  moodType: { type: String, required: true },
  intensity: { type: Number, min: 1, max: 10 },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Mood', moodSchema);
