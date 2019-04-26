
console.log('hello')
/*
* Dives into node modules folder and grabs the module
*/
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
const config = require('./config/config')
const app = express()
app.use(morgan('combined'))

// Allow app to parse json
app.use(bodyParser.json())
// Need cors to allow anyone in world to connect
app.use(cors())

require('./routes')(app)

sequelize.sync({ force: false })
  .then(() => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })
