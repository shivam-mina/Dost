const connectDB = require("./config/db")
require("dotenv").config()
const PORT = process.env.PORT

connectDB()

const app = require("express")()
app.get("/", (req, res) => {
  res.send("success!")
})
app.listen(PORT, () => {
  try {
    console.log(`listening on port ${PORT}`)
  } catch (err) {
    console.log(err)
  }
})
