const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const {mainRoute, gamesRouter} = require("./routes")
const cors = require("./middlewares/cors")

const app = express()
const PORT = 3000

app.use(
  cors, // Я не понимаю, на что он ругается😭
  bodyParser.json(),
  express.static(path.join(__dirname, 'public')),
  mainRoute,
  gamesRouter
) 

app.listen(PORT, () => {
	console.log(`Server is running at PORT http://localhost:${PORT}`)
})