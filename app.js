const express = require('express')
const http = require('http')
const https = require('https')
const fs = require('fs')

var privateKey = fs.readFileSync('./selfsigned.key', 'utf8')
var certificate = fs.readFileSync('./selfsigned.crt', 'utf8')
var credentials = {key: privateKey, cert: certificate}

var app = express()

app.use(express.json())

app.use('/api', require('./controller'))

app.use((err, req, res, next) => {
    console.error(err)
    res.status(422).send({ error: err.message })
})

http.createServer(app).listen(9010, ()=>{console.log(`HTTP Listening in 8080...`)})
https.createServer(credentials, app).listen(9011, ()=>{console.log(`HTTPS Listening in 8081...`)})