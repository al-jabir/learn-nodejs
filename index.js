const EventEmitter = require('events')

const emitter - new EventEmitter();

//register a liseten for bellrign event

emitter.on('bellRing', () => {
    console.log('we need to run');
})
// raise an event

setTimeout(() => {
    emitter.emit('bellRign')
}, 2000);