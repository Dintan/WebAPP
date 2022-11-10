const Waypoint = require("../models/Waypoint")


const waypointController = {

    create: async waypoint => {
        try {


            const newWaypoint = new Waypoint(waypoint)
            const savedWaypoint = await newWaypoint.save()

            return savedWaypoint
        } catch (err) {
            console.log("Error al intentar crer registro");
        }
    },

    findAll: async () => {
        try {


            const waypoints = await Waypoint.find({})
            return waypoints
        } catch (error) {
            console.log("Error al consultar todos los registros");
        }
    },

    findOne: async id => {
        try {


            const waypoint = await Waypoint.findById(id)
            return waypoint

        } catch (error) {
            console.log("Registro no encontrado");
        }
    },


    update: async (id, data) => {
        //  let previousWaypoints = waypoints.find(c => c.id == id)
        try {

            await Waypoint.updateOne(
                { _id: id },
                data
            )

            let updatedWaypoints = await Waypoint.findById(id)
            //const index = waypoints.indexOf(previousWaypoints)
            //waypoints[index] = updatedWaypoints
            return updatedWaypoints
        } catch (error) {
            console.log("Error al intentat actualizar registro");
        }

    },

    delete: async id => {
        try {


            await Waypoint.deleteOne({ _id: id })

        } catch (error) {
            throw new Error("Error al intentar eliminar registro");
        }
    }
}

module.exports = waypointController