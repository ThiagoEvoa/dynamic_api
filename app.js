const express = require('express')
const http = require('http')

var app = express()

app.use(express.json())

app.use('/api', require('./controller'))

app.use((err, req, res, next) => {
    console.error(err)
    res.status(422).send({ error: err.message })
})

http.createServer(app).listen(9010, ()=>{console.log(`HTTP Listening in 9010...`)})