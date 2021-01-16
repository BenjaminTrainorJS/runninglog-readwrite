module.exports = {
  getDailyRunData,
  updateDailyRunData
}

const fs = require('fs')

function getDailyRunData (callback) {
  fs.readFile('data.json', 'utf-8', (err, text) => {
    if (err) {
      console.log(err)
    }
    const data = JSON.parse(text)
    callback(data)
  })
}

// Input Data
const obj = {
  2: {
    day: 'Tuesday',
    duration: 90,
    effort: 'aerobic steady pace'
  }
}

function updateDailyRunData (callback) {
  fs.writeFile('data.json', JSON.stringify(obj, undefined, 2), { flag: 'a+' }, (err) => {
    if (err) {
      console.log(err)
    }
    const data = obj
    callback(data)
    console.log('This data has been updated')
  })
}
