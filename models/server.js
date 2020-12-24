const express   = require('express');
const server    = require('http');
const socketio  = require('socket.io');
const path      = require('path');
const Socket    = require('./sockets');
const cors      = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        // Http server
        this.server = server.createServer( this.app );
        // Configuración de socket
        this.socketio = socketio( this.server, { /* configuraciones */ } );
    }

    middlewares() {
        // Desplegar el directorio publico 
        this.app.use( express.static( path.resolve( __dirname, '../public' )) );
        // cors
        this.app.use( cors() );
    }

    configurarSockets() {
        // Servidor de socket
        new Socket( this.socketio );
    }

    execute() {
        // inicializar middlewares
        this.middlewares();
        // inicializar sockets
        this.configurarSockets();
        // inicializar servidor.
        this.server.listen( this.port , () => {
            console.log('Serven on port '+ this.port);
        });
    }
}

module.exports = Server;