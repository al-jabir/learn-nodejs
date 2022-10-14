const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('<html><head><title>From</title></head></html>')
        res.write(`<body><form method='post' action='/process'><input name='message'/></form></body>`)
        res.end()
    } else if (req.url === '/process' && req.method === 'POST') {
        const body = []
        // req.on('data', (chunk) => {
        //     console.log(chunk.toString())
        // })
        req.on('data', (chunk) => {
            body.push(chunk)
        })

        req.on('end', () => {
            console.log(`stream finished`);
            const parseBody = Buffer.concat(body).toString()
            console.log(parseBody)
            res.write('Thank you for  submitting')
            res.end()
        })

    } else {
        res.write('not found')
        res.end()
    }
});
server.listen(1998)
console.log('server running is 1998')