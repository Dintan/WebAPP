const Character = require("../models/Character")


const characterController = {

    create: async character => {
        try {


            const newCharacter = new Character(character)
            const savedCharacter = await newCharacter.save()

            return savedCharacter
        } catch (err) {
            console.log("Error al intentar crer registro");
        }
    },

    findAll: async () => {
        try {


            const characters = await Character.find({})
            return characters
        } catch (error) {
            console.log("Error al consultar todos los registros");
        }
    },

    findOne: async id => {
        try {


            const character = await Character.findById(id)
            return character

        } catch (error) {
            console.log("Registro no encontrado");
        }
    },


    update: async (id, data) => {
        //  let previousCharacters = characters.find(c => c.id == id)
        try {

            await Character.updateOne(
                { _id: id },
                data
            )

            let updatedCharacters = await Character.findById(id)
            //const index = characters.indexOf(previousCharacters)
            //characters[index] = updatedCharacters
            return updatedCharacters
        } catch (error) {
            console.log("Error al intentat actualizar registro");
        }

    },

    delete: async id => {
        try {


            await Character.deleteOne({ _id: id })

        } catch (error) {
            throw new Error("Error al intentar eliminar registro");
        }
    }
}

module.exports = characterController