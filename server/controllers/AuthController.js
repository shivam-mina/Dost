const User = require('../models/User')
const { createSecretToken } = require('../util/SecretToken')
const bcrypt = require('bcrypt')

module.exports.SignUp = async (req, res, next) => {
  try {
    const { username, email, password, createdAt } = req.body
    /* Checking  if user exists already */
    const exisitingUser = await User.findOne({ email })
    if (exisitingUser) {
      return res.json({ message: 'User already exists' })
    }

    /* User Not Found
    Creating a new User entry
    */

    const user = await User.create({ username, email, password, createdAt })
    const token = createSecretToken(user._id)

    res.cookie('token', token, {
      withCredentials: true,
      httpOnly: false,
    })

    res.status(201).json({ message: 'User Signed up', success: true, user })

    next()
  } catch (error) {
    console.log(error)
  }
}
