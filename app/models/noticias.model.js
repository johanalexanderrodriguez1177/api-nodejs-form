'use strict'

const connection = require('../../config/connection')

var dataModels = {
    getNoticias : (callback) => {
        if(connection) {
            let sql = `select * from noticias`

            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback(rows)
            })
        }
    },
    addNoticias : (data, callback) => {

        if(connection) {
            let sql = `insert into noticias(name, description) values (${connection.escape(data.name)}, ${connection.escape(data.description)})`
            connection.query(sql, (error, rows) => {
                if(error) throw error
                callback({message : 'Noticia Agregada'})
            })
        }
    }
    
}

module.exports = dataModels