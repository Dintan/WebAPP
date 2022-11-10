const express = require("express")
const moment = require("moment")
const mongoose = require("mongoose")





const app = express()
const routes = require("./routes")
const api = require("./routes/api")

const port = 3001

const dbConnect = async () => {
    try {

        await mongoose.connect("mongodb+srv://Dintan:mongo@cluster0.tr58gk7.mongodb.net/testDb",
        )
        console.log("DB Conectada.")
    } catch (error) {

        console.log("Error de conexion", error.message)
    }
}

//mongodb+srv://Dintan:<password>@cluster0.tr58gk7.mongodb.net/?retryWrites=true&w=majority



app.use(express.json())
app.use(express.urlencoded({ extended: true }))

routes(app)
app.use("/api/v1", api)

app.listen(port, async function () {

    await dbConnect()

    console.log(`Web APP listening port ${port}`)
    console.log(moment().format('h:mm:ss a'))
})