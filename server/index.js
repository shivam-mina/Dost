const app = require("express")()

app.get("/", (req, res) => {
  res.send("success!")
})
app.listen(5000, () => {
  try {
    console.log("listening on on port 5000")
  } catch (err) {
    console.log(err)
  }
})
