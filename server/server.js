require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db')
const colors = require('colors')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const { PORT } = process.env
const authRoute = require('./routes/AuthRoute')

const app = express()

connectDB()

app.listen(PORT, () => {
  try {
    console.log(`listening on port ${PORT}`.yellow)
  } catch (err) {
    console.log(err)
  }
})
app.use(
  cors({
    origin: [`http://localhost:3000`],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
)

app.use(express.json())

app.use(cookieParser())

app.use('/', authRoute)
