'use strict'

const route = require('express').Router()
const { getNoticias, addNoticias} = require('../controllers/noticias.controller')

route.route('/').get(getNoticias)

route.route('/').post(addNoticias)

module.exports = route
