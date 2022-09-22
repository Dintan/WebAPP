const express = require("express")
const moment = require("moment")

const app = express()
const routes = require("./routes")
routes(app)

app.listen(3000, function () {
    console.log("Web APP listening port 3000")
    console.log(moment().format('h:mm:ss a'))
})