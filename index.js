const { 
  getDailyRunData,
  updateDailyRunData
 } = require('./lib')

// getDailyRunData((obj) => {
//     console.log(obj["1"]["day"] + '\'s run was ' + obj["1"]["duration"] + ' minutes,\nand the effort was ' + obj["1"]["effort"])
    
//     updateDailyRunData((obj) => {
//       console.log(obj["2"]["day"] + '\'s run was ' + obj["2"]["duration"] + ' minutes,\nand the effort was ' + obj["2"]["effort"])
//     })
// })
  
const server = require('./server')
const port = 3000

 server.listen(port, () => {
   console.log('Listening on http://localhost:' + port)
 })