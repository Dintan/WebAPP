const mongoose = require("mongoose")

const Character = require("../models/Character")
const fakeCharacters = require("../Test/data/fakeCharacters.json")

const addFakeId = (element, index) => ({
    ...element,
    id: index
})
const characters = [...fakeCharacters].map(addFakeId)


const characterController = {

    create: async character => {

        const newCharacter = new Character(character)
        const savedCharacter = await newCharacter.save()

        return savedCharacter
    },

    findAll: async () => {
        const characters = await Character.find({})
        return characters
    },

    findOne: async id => {
        const character = await Character.findById(id)

        return character
    },


    update: async (id, data) => {
        //  let previousCharacters = characters.find(c => c.id == id)


        await Character.updateOne(
            { _id: id },
            data
        )

        let updatedCharacters = await Character.findById(id)
        //const index = characters.indexOf(previousCharacters)
        //characters[index] = updatedCharacters
        return updatedCharacters

    },

    delete: async id => {

        let previousCharacters = characters.find(c => c.id == id)
        const index = characters.indexOf(previousCharacters)

        characters.splice(index, 1)

    }

}

module.exports = characterController