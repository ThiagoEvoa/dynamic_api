const express = require('express')

var app = express()

app.use(express.json())

app.use('/api', require('./controller'))

app.use((err, req, res, next) => {
    console.error(err)
    res.status(422).send({ error: err.message })
})

app.listen(8080, () => {
    console.log(`Listening in 8080...`)
})