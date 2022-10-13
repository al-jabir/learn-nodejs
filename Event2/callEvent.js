const EventMitter = require('events')

class Call extends EventMitter {
    callStart() {
        console.log('Calling...');

        setTimeout(() => {
            this.emit('callRing', {
                load: 'calling...',
                name: 'mom'
            });
        }, 2000);
    }
}

module.exports = Call