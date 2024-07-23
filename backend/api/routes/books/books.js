const express = require('express')
const Book = require('../../models/book.model')
const generateUserId = require('../user/generate_uId')
const router = express.Router()

let lists = [
    {
        name: "Amazon",
        price: 2000,
        currency: "Naira"
    },
    {
        name: "Javascript for Beginners",
        price: 5000,
        currency: "Naira"
    }
]
let categories = [
    {
        name: "Religion",
    },
    {
        name: "Education",
    }
]

router.get('/', async (req, res) => {
    const allbooks = await Book.findAll()
    res.status(200).send(allbooks)
})

router.get('/:id', async (req, res) => {
    const bookId = req.params.id

    try {
        const book = await Book.findByPk(bookId)
        if (!book) {
            res.status(404).send('Book Not Found')
        }

        res.status(200).send(book)
    } catch (error) {
        console.error(error)
    }
})

router.post('/', async (req, res) => {
    const { title, author, genre, userId = generateUserId(5).toString(), price } = req.body
    const book = await Book.create({ title, author, genre, price, userId })
    res.status(200).send(book)
})



module.exports = router
