'use strict'

const dataModels = require('../models/formulario.model')

function getRegistro(req, res) {
    dataModels.getRegistro((data, error) => {
        res.json(data)
    })
}

function addRegistro (req, res) {
    
    const {name, company, email, phone, category, mensaje} = req.body
    console.log(`formulario : ${name}, ${company}, ${email}, ${phone}, ${category}, ${mensaje}`)
    dataModels.addRegistro({name, company, email, phone, category, mensaje}, (data, error) => {
        res.json(data)
    })
}

module.exports = {
    getRegistro,
    addRegistro
}