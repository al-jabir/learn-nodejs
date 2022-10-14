const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
    const strem = fs.createReadStream(__dirname + '/big.txt', 'utf-8')
    strem.pipe(res)

}).listen(3000)
console.log('loading');