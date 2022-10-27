const { response } = require("express")
const express = require("express")

const characterController = require("../controllers/characterController")

const api = express.Router()


api
    .get("/", (req, res) => {
        const response = "API home".home()

        res.send(response)
    })

    .get("/characters", async (req, res) => {
        const response = await characterController.findAll()

        res.send(response)
    })

    .get("/characters/:id", async (req, res) => {

        const id = req.params.id

        const response = await characterController.findOne(id)

        res.send(response)
    })

    .post("/characters", async (req, res) => {

        const newCharacter = await characterController.create(req.body)

        res.send(newCharacter)
    })

    .patch("/characters/:id", async (req, res) => {
        const id = req.params.id
        const updatedCharacter = await characterController.update(id, req.body)
        res.send(updatedCharacter)
    })

    .delete("/characters/:id", async (req, res) => {
        const id = req.params.id
        await characterController.delete(id)
        res.send("Character deleted correctly")
    })


module.exports = api