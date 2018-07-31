const app = require('./app')

app.listen(process.env.PORT || 3000)

var pg = require('knex')({
  client: 'pg',
  connection: process.env.PG_CONNECTION_STRING,
  searchPath: ['knex', 'public'],
})