const express = require('express')
const languages = express.Router()
const Language = require("../models/language.js")

languages.get("/", async (req, res) => {
    let foundLanguages = await Language.find()
    res.json(foundLanguages)
})

languages.get("/random", async (req, res) => {
    let foundLanguages = await Language.find()
    res.json(foundLanguages[Math.floor(Math.random() * foundLanguages.length)])
})

languages.get("/:language", async (req, res) => {
    let foundLanguage = await Language.findOne({name: req.params.language.toLowerCase()})
    res.json(foundLanguage)
})



module.exports = languages