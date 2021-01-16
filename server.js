const express = require('express')
const hbs = require('express-handlebars')

const server = express()

// Handlebars middleware config
server.engine('hbs', hbs({
  extname: 'hbs'
}))
server.set('view engine', 'hbs')

server.use(express.static('public'))

// Routes
const routes = require('./routes')

server.use('/', routes)

module.exports = server
