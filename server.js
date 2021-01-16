const express = require('express')
const hbs = require('express-handlebars')

const server = express()

// Handlebars middleware config
server.engine('hbs', hbs({
  extname: 'hbs'
}))
server.set('view engine', 'hbs')

server.use(express.static('public'))


server.get('/', (req, res) => {
  res.render('home')
})

module.exports = server