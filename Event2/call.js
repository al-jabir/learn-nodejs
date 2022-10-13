const Call = require('./callEvent')

const call = new Call()

call.on('callRing', ({ load, name }) => {
    console.log(`When will be ${name} ${load}`)
});

call.callStart()