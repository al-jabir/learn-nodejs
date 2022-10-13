const Phone = require('./phoneEvent')

const phone = new Phone();

phone.on('phoneCall', ({ call, name }) => {
    console.log(`Your ${name} ${call} missed call`)
})

phone.phoneStart()