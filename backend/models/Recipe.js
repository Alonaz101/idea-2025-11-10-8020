const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: [String],
  moodTags: [String],
  instructions: String,
  rating: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

recipeSchema.index({ moodTags: 1 });

module.exports = mongoose.model('Recipe', recipeSchema);
