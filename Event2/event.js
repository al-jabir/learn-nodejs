const EventEmitter = require('events')

const emitter = new EventEmitter();

emitter.on('callRing...', ({ period, fire }) => {
    console.log(`We need to run! ${period} period ended and ${fire}`)
})

setTimeout(() => {
    emitter.emit('callRing...', {
        period: 'first',
        fire: 'I will be fire you for career'
    });
}, 2000);