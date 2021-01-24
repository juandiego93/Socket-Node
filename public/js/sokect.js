var socket = io();

socket.on('connect', function () {
    console.log('Conectado al servidor')
})

socket.on('disconnect', function () {
    console.log('Conexión perdida con el servidor')
})

socket.emit('sendMessage', {
    user: 'Juan Diego',
    message: 'Hola mundo'
}, function (resp) {
    console.log(resp);
})

socket.on('sendMessage', (data) => {
    console.log(data);
})