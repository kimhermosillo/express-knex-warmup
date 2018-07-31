const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 9000
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())


app.get('/',(request,response,next) => {
  response.send('🎉')
})


app.listen(port,() => {
  console.log(`I am listening on ${port}`)
})