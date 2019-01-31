
console.log('hello')
/*
* Dives into node modules folder and grabs the module
*/
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))

// Allow app to parse json
app.use(bodyParser.json())
// Need cors to allow anyone in world to connect
app.use(cors())

app.get('/status', (req, res) => {
  res.send({
    message: 'hello world'
  })
})

app.post('/register', (req, res) => {
  res.send({
    message: `Hello ${req.body.email} your user was registered!`
  })
})

app.listen(process.env.PORT || 8081)
