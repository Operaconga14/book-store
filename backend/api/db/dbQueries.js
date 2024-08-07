const databaseQuery = `CREATE DATABASE IF NOT EXISTS book_store;`

const useDbQuery = `USE book_store;`

const bookstableQuery = `CREATE TABLE IF NOT EXISTS books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    genre VARCHAR(100) NOT NULL,
    price FLOAT NOT NULL,
    userId VARCHAR(100),
    createdAt DATE,
    updatedAt DATE
)`

const usertableQuery = `CREATE TABLE IF NOT EXISTS user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name varchar(100) NOT NULL,
    email varchar(100) NOT NULL,
    userId varchar(100),
    tel INT NOT NULL,
    location varchar(100) NOT NULL
)`


module.exports = {
    databaseQuery, useDbQuery, bookstableQuery, usertableQuery
}
