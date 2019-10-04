const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
  thumbnail: String,
  company: String,
  price: Number,
  techs: [String],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  toJSON: {
    virtuals: true,
  },
});

SpotSchema.virtual('thumbnail_url').get(function() {
  // switch to your machine or localhost's IP
  return `http://10.0.1.87:3333/files/${this.thumbnail}`
});

module.exports = mongoose.model('Spot', SpotSchema);