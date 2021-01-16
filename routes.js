const express = require('express')

const router = express.Router()

// GET route
router.get('/', (req, res) => {
  res.render('home')
})

// POST route
router.post('/')

module.exports = router
