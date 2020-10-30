'use strict'

const connection = require('../../config/connection')

var dataModels = {
    getRegistro : (callback) => {
        if(connection) {
            let sql = `select * from formulario`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows)
            })
        }
    },
    addRegistro : (data, callback) => {

        if(connection) {
            let sql = `insert into formulario(name, company, email, phone, category, mensaje) values (${connection.escape(data.name)}, ${connection.escape(data.company)}, ${connection.escape(data.email)}, ${connection.escape(data.phone)}, ${connection.escape(data.category)}, ${connection.escape(data.mensaje)})`
            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback({message : 'Registro Exitoso'})
            })
        }
    }
    
}

module.exports = dataModels