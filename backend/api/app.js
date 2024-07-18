const express = require('express')
require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 3000
const api = process.env.API_URL

// MIDDLEWARE CONFIG
app.use(express.json())

// ROUTES CONFIG
app.get(`${api}`, (req, res) => {
    res.status(200).send('Hello Api')
})





// PORT LISTENING CONFIG
app.listen(PORT, () => {
    console.log(`Listening to URL http://localhost:${PORT}${api}`)
})
