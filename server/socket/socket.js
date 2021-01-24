const { io } = require('../server')

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('sendMessage', {
        user: 'Juan Diego',
        message: 'Hola al mundo'
    }, function () {
        console.log('Se disparo un callback');
    })

    client.on('sendMessage', (data, callback) => {
        client.broadcast.emit('sendMessage', data)

        // if (data.usuario) {
        //     callback({ resp: 'TODO SALIO BIEN' })
        // } else { 
        //     callback({ resp: 'TODO SALIO MAL !!!!!!!!!' })
        // }
    })

    client.on('disconnect', () => {
        console.log('Usuario desconectado')
    })
})
