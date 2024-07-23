const express = require('express')
const generateRandomNumericId = require('./generate_uId')
require('./generate_uId')
const router = express.Router()

let users = [
    {
        name: "User Test",
        location: "Nigeria",
        uId: generateRandomNumericId(6)
    }
]

router.get('/', (req, res) => {
    res.status(200).send(users)
})

router.post('/register', (req, res) => {
    let {name, email, password, uId} = req.body

    res.status(200).send(`${name}, ${email}, ${password}, ${uId = generateRandomNumericId(5)}`)
})

router.post('/login', (req, res) =>  {

})

router.patch('/update', (req, res) => {

})

module.exports= router
