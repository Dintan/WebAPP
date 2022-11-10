const { response } = require("express")
const express = require("express")

const waypointController = require("../controllers/waypointController")

const waypointRouter = express.Router()


waypointRouter

    .get("/", async (req, res) => {
        const response = await waypointController.findAll()

        res.send(response)
    })

    .get("/:id", async (req, res) => {

        const id = req.params.id

        const response = await waypointController.findOne(id)

        res.send(response)
    })

    .post("/", async (req, res) => {

        const newWaypoint = await waypointController.create(req.body)

        res.send(newWaypoint)
    })

    .patch("/:id", async (req, res) => {
        const id = req.params.id
        const updatedWaypoint = await waypointController.update(id, req.body)
        res.send(updatedWaypoint)
    })

    .delete("/:id", async (req, res) => {
        try {


            const id = req.params.id
            await waypointController.delete(id)
            res.send("Waypoint deleted correctly")
        } catch (error) {
            console.log(error.message)
            res.send(error.message)
        }
    })


module.exports = waypointRouter