const mongoose = require('mongoose')

const languageSchema = new mongoose.Schema({
    name: {type: String, required: true},
    greeting: String,
    pangram: String,
    filler: String
})

const Language = mongoose.model("Language", languageSchema)
module.exports = Language