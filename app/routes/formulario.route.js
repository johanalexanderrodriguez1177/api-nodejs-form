'use strict'

const route = require('express').Router()
const { getRegistro, addRegistro} = require('../controllers/formulario.controller')

route.route('/').get(getRegistro)

route.route('/').post(addRegistro)

module.exports = route
