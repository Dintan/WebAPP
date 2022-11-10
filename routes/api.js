const { response, application } = require("express")
const express = require("express")

const characterRouter = require("./characters")
const api = express.Router()


api
    .get("/", (req, res) => {
        const response = "API home".home()

        res.send(response)
    })

api.use("/characters", characterRouter)
module.exports = api