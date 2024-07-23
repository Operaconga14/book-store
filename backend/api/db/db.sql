CREATE DATABASE IF NOT EXISTS book_store;

USE book_store;

CREATE TABLE IF NOT EXISTS books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    genre VARCHAR(100) NOT NULL,
    price FLOAT NOT NULL,
    userId INT NOT NULL
)

CREATE TABLE IF NOT EXISTS user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name varchar(100) NOT NULL,
    email varchar(100) NOT NULL,
    userId INT NOT NULL,
    tel INT NOT NULL,
    location varchar(100) NOT NULL,
)
