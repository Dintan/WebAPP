const { response } = require("express")
const express = require("express")

const characterController = require("../controllers/characterController")

const characterRouter = express.Router()


characterRouter

    .get("/", async (req, res) => {
        const response = await characterController.findAll()

        res.send(response)
    })

    .get("/:id", async (req, res) => {

        const id = req.params.id

        const response = await characterController.findOne(id)

        res.send(response)
    })

    .post("/", async (req, res) => {

        const newCharacter = await characterController.create(req.body)

        res.send(newCharacter)
    })

    .patch("/:id", async (req, res) => {
        const id = req.params.id
        const updatedCharacter = await characterController.update(id, req.body)
        res.send(updatedCharacter)
    })

    .delete("/:id", async (req, res) => {
        try {


            const id = req.params.id
            await characterController.delete(id)
            res.send("Character deleted correctly")
        } catch (error) {
            console.log(error.message)
            res.send(error.message)
        }
    })


module.exports = characterRouter