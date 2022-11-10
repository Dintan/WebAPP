const mongoose = require("mongoose")
const Schema = mongoose.Schema

const WaypointSchema = new Schema({
    name: { type: String }
})

const Waypoint = mongoose.model("Waypoint", WaypointSchema)

module.exports = Waypoint