const fs = require('fs')

fs.writeFileSync('something.txt', 'Hello Programmers')

fs.readFile('something.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
})

console.log('hello')
