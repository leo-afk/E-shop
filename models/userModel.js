const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    reuqired: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: Number,
    dafault: 0
  },
  cart: {
    type: Array,
    dafault: []
  }

},{
  timestamps: true
})

module.exports = mongoose.model('Users', userSchema)
