var http = require('http')

var port = 4000

var server = http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.end('I am learning github Actions workflow\n')
})

server.listen(port)

console.log('Server running at http://localhost:' + port)