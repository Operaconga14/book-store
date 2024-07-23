const express = require('express')
const router = express.Router()

let payment = [
    {
        name: "Guarantee Trust Bank",
    },
    {
        name: "Zenith Bank",
    }
]

router.get('/', (req, res) => {
    res.status(200).send(payment)
})

module.exports = router
