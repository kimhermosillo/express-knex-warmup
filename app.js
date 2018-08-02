const express = require('express')
const port = 7000 || process.env.NODE_ENV
const queries = require('./queries')
const app = express()

app.get('/', (request, response, next) => {
  queries.getAll().then(dogs => response.json({dogs}))
})

app.listen(port, ( ) => {
  console.log(`running on port ${port}`)
})

