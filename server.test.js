const { TestScheduler } = require('jest')
const request = require('supertest')

const server = require('./server')

test('Get home template', (done) => {
  expect.assertions(2)
  request(server)
    .get('/')
    .expect(200) //same as line 12
    .end((err, res) => {
      expect(res.status).toBe(200)
      expect(err).toBeNull()
      done()
    })
})