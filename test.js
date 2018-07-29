//const http = require('http')
// const url = require('url') // use for url.parse for the ?
// const fs = require('fs')
const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.end()
})

let port = 8080
let start = () => console.log('---\nStarting express server on port ' + port + '\nTime: ' + new Date() + '\n---')
app.listen(port, start)

/*

let server = http.createServer((req, res) => {
  let q = req.url
  let filename = (q == '/') ? './public/index.html' : './public' + q + '.html'
  fs.readFile(filename, (error, data) => {
    if (error) {
      res.writeHead(404, {'Content-Type': 'text/html'})
      res.write('Something went wrong :(')
    } else if (req.url = '/kevin') {
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.write(data)
    }
    res.end()
  })
})

server.listen(port)

*/
