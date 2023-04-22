const controller = require('express').Router()

let obj = {}

controller.get('/', (req, res, next) => {
    res.send(obj)
})

controller.post('/', (req, res, next) => {
    obj = req.body
    res.send()
})

module.exports = controller