// NATIVE
const http = require('http')

let server

server = http.createServer((req, res) => {
  res.write('hello world')
  res.statusCode = 200
  res.end()
})

server.listen('3210', () => {
  console.log('running on 3210')
})
