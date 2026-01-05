const controller = require('express').Router()

let obj = {}


controller.get('/', (req, res, next) => {
    res.send(obj)
})

controller.post('/', (req, res, next) => {
    obj = req.body
    res.send(obj)
})

controller.put('/id/:id', (req, res, next) => {
    obj.list[req.params.id] = req.body
    res.send(obj)
})

module.exports = controller