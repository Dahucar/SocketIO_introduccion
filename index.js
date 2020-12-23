// Servidor de express
const app = require('express')();
// Servidor de socket
const server = require('http').createServer(app);
// Configuracion del socket server.
const io = require('socket.io')(server);
io.on('connection', () => { /* … */ });
server.listen(8000, () => {
    console.log('Serven on port 8000');
});