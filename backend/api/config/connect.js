const mariadb = require('mariadb')
const fs = require('fs')
const path = require('path')
const { databaseQuery, useDbQuery, bookstableQuery, usertableQuery } = require('../db/dbQueries')
require('dotenv').config()

db_host = process.env.DB_HOST
db_user = process.env.DB_USER
db_pass = process.env.DB_PASWORD
db_name = process.env.DB_NAME

const projectDir = path.join(__dirname, '..')
const dbFolderpath = path.join(projectDir, 'db')
const sqlFilepath = path.join(dbFolderpath, 'db.sql')
const sql = fs.readFileSync(sqlFilepath, 'utf-8')

async function connect() {
    const pool = mariadb.createPool({
        host: db_host,
        user: db_user,
        password: db_pass,
        connectionLimit: 5
    })

    let conn;
    try {
        conn = await pool.getConnection();
        console.log('Connected to the MariaDB server.')

        // Create Database
        pool.query(databaseQuery, (err, result) => {
            if (err) {
                console.error(err)
            }

            console.log('Created Succesfully')
        })

        // Use Database
        pool.query(useDbQuery, (err, result) => {
            if (err) {
                console.error(err)
            }

            console.log('Created Succesfully')
        })

        // Create Books Table
        pool.query(bookstableQuery, (err, result) => {
            if (err) {
                console.error(err)
            }

            console.log('Created Succesfully')
        })

        // Create User Table
        pool.query(usertableQuery, (err, result) => {
            if (err) {
                console.error(err)
            }

            console.log('Created Succesfully')
        })

    } catch (err) {
        console.error('Error connecting to the database:', err);
    }

}

module.exports = connect
