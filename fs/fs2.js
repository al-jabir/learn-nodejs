const fs = require('fs')

fs.readFile('mytext.txt', (err, data) => {
    console.log(data.toString())
})

console.log('Loading...');


fs.realpath('mytext.txt', (err, data) => {
    console.log(data)
})

// fs.fstat('mytext.txt', (err, data) => {
//     console.log(data)
// })

fs.writeFileSync('love.txt', 'I love coding for career')

