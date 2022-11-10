const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CharacterSchema = new Schema({
    name: { type: String }
})

const Character = mongoose.model("Character", CharacterSchema)

module.exports = Character