const { EventEmitter } = require('events')
const event = new EventEmitter()

/*
event.on('saySomething', (message) => {
    console.log('Eu ouvi você', message)
})
*/

event.once('saySomething', (message) => {
    console.log('Eu ouvi você', message)
}) 



event.emit('saySomething', "Naomi")
event.emit('saySomething', "Ton")
event.emit('saySomething', "Joaquina")
