const express = require("express")

const apiController = require("../controllers/apiController")

const api = express.Router()


api
    .get("/", (req, res) => {
        const response = apiController.home()

        res.send(response)
    })

    .get("/records", async (req, res) => {
        const response = await apiController.getRecords()

        res.send(response)
    })
module.exports = api