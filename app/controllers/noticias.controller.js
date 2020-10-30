'use strict'

const dataModels = require('../models/noticias.model')

function getNoticias(req, res) {
    dataModels.getNoticias((data, error) => {
        res.json(data)
    })
}

function addNoticias (req, res) {
    
    const {name, description} = req.body
    console.log(`noticias : ${name}, ${description}`)
    dataModels.addNoticias({name, description}, (data, error) => {
        res.json(data)
    })
}

module.exports = {
    getNoticias,
    addNoticias
}