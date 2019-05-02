const express = require("express")
const logger = require("morgan")

const PORT = process.env.PORT || 4000

const indexRouter = require("./routes/index")
const apiRouter = require("./routes/api")

const app = express()

app.use(logger("dev"))
app.use(express.json())

app.use("/", indexRouter)
app.use("/api", apiRouter)
app.listen(PORT, console.log("Server is listening on port: " + PORT))