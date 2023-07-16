const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please enter username'],
  },
  email: {
    type: String,
    required: [true, 'Please enter email address'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please enter password'],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
})

userSchema.pre('save', async function () {
  this.password = await bcrypt.hash(this.password, 12)
})

module.exports = mongoose.model('User', userSchema)
