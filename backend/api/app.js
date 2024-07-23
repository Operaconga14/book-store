const express = require('express')
const booksRouter = require('./routes/books/books')
const paymentRouter = require('./routes/payment/payment')
const userRouter = require('./routes/user/users')
const connect = require('./config/connect')
require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 3000
const api = process.env.API_URL

// MIDDLEWARE CONFIG
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// ROUTES CONFIG
app.get(`${api}`, (req, res) => {
    res.status(200).send('Hello Api')
})

app.use(`${api}/books`, booksRouter)
app.use(`${api}/payment`, paymentRouter)
app.use(`${api}/user`, userRouter)

// PORT LISTENING CONFIG
app.listen(PORT, () => {
    connect()
    console.log(`Listening to URL http://localhost:${PORT}${api}`)
})
