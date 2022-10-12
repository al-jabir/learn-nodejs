const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello Programmers')
        res.write(' How are you?')
        res.end()
    } else if (req.url === '/about') {
        res.write('This is about page section')
        res.end()
    } else {
        res.write('Page is not found')
        res.end()
    }
});
server.listen(1998)
console.log('server running is 1998')