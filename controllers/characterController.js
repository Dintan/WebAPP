const fakeCharacters = require("../Test/data/fakeCharacters.json")

const addFakeId = (element, index) => ({
    ...element,
    id: index
})
const characters = [...fakeCharacters].map(addFakeId)


const characterController = {

    create: async character => {
        const newCharacter = {
            ...character,
            id: characters.length
        }

        characters.push(newCharacter)

        return newCharacter
    },

    findAll: async () => {

        return characters
    },

    findOne: async id => {
        const character = characters.find(c => c.id == id)

        return character
    },


    update: async (id, data) => {
        let previousCharacters = characters.find(c => c.id == id)

        const updatedCharacters = {
            ...previousCharacters,
            ...data
        }

        const index = characters.indexOf(previousCharacters)
        characters[index] = updatedCharacters
        return updatedCharacters

    },

    delete: async id => {

        let previousCharacters = characters.find(c => c.id == id)
        const index = characters.indexOf(previousCharacters)

        characters.splice(index, 1)

    }

}

module.exports = characterController