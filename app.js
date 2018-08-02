const express = require('express')
const port = process.env.NODE_ENV || 7000
const queries = require('./queries')
const app = express()

app.get('/', (request, response, next) => {
  queries.getAll().then(dogs => response.json({dogs}))
})

app.listen(port, ( ) => {
  console.log(`running on port ${port}`)
})

