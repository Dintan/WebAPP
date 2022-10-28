const express = require("express")
const moment = require("moment")
const mongoose = require("mongoose")

mongoose.connect("mongodb + srv://Dintan:mongo@cluster0.tr58gk7.mongodb.net/testDb",
    {},
    () => console.log("DB Conectada")
)



const app = express()
const routes = require("./routes")
const api = require("./routes/api")

const port = 3000

//mongodb+srv://Dintan:<password>@cluster0.tr58gk7.mongodb.net/?retryWrites=true&w=majority



app.use(express.json())
app.use(express.urlencoded({ extended: true }))

routes(app)
app.use("/api/v1", api)

app.listen(port, function () {
    console.log(`Web APP listening port ${port}`)
    console.log(moment().format('h:mm:ss a'))
})