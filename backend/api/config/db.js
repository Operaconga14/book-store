const { Sequelize } = require('sequelize')
require('dotenv').config()

db_host = process.env.DB_HOST
db_user = process.env.DB_USER
db_pass = process.env.DB_PASWORD
db_name = process.env.DB_NAME

const sequelize = new Sequelize(`${db_name}`, `${db_user}`, `${db_pass}`, {
    host: db_host,
    dialect: 'mariadb'
})

module.exports = sequelize
