const EventMitter = require('events')

class Phone extends EventMitter {
    phoneStart() {
        console.log('phone calling...');

        setTimeout(() => {
            this.emit('phoneCall', {
                call: 'five',
                name: 'Mom'
            })
        }, 2000)
    }
}

module.exports = Phone;