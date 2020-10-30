'use strict'

const app = require('./app/app')

// database

require('./config/connection')

app.listen(app.get('port'), (error) => {
    if(error) {
        console.log(`Este es un error : ${error}`)
    }else {
        console.log(`servidor corriendo en el puerto : ${app.get('port')}`)
    }
})