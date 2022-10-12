const path = require('path')

// console.log(path.sep);
// console.log(path.win32);

// console.log(path.basename(path))

const myPath = 'C:/Users/JABIR/Desktop/Learn NodeJS/path/path.js'

console.log(path.basename(myPath));
console.log(path.dirname(myPath));
console.log(path.parse(myPath));
console.log(path.posix);
console.log(path.resolve(myPath))
console.log(path.extname(myPath))
console.log(path.join(myPath))

console.log(path.normalize(myPath))