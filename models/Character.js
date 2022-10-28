const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CharacterSchema = new Schema({
    name: { type: String }
})

const Character = mongoose.Model("Character", CharacterSchema)

module.export = CharacterSchema