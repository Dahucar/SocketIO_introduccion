class Socket {
    constructor( io ) {
        this.io = io;
        this.socketsEvents();
    }

    // Configuracion del socket server.
    socketsEvents() {
        this.io.on('connection', ( socket ) => { 
            console.log('New cliente connected.');
            // el socket permite emitir un evento hacia el cliente
            // escuchando el evento de envio de mensaje
            socket.on('send-message', ( data ) => {
                console.log('data from send-message: '+ data.msgContent );
                let { msgContent } = data;
                // DANDO UNA RESPUESTA
                // socket: envia solo al cliente que envia la solicitud
                // io: envia a todos los clientes conectados.
                this.io.emit('receiver-message', { msgContent });
            });
        });
    }
}

module.exports = Socket;