const express = require('express')
const fs = require('fs')
const router = express.Router()

// GET route
router.get('/', (req, res) => {
  res.render('home')
})

// POST route
router.post('/submit', (req, res) => {
  let newObj = {}
    newObj.day = req.body.day,
    newObj.duration = req.body.duration,
    newObj.effort = req.body.effort
  
  submitRun(newObj)
}) 


function submitRun(submittedRun) {
  fs.readFile('data.json', (err, data) => {
    let storedData = JSON.parse(data)
    console.log(submittedRun)
    console.log(storedData)
    storedData['session'].push(submittedRun)
    console.log(storedData)
  })
}





module.exports = router
