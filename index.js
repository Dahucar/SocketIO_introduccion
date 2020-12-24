// SERVIDOR BASADO EN CLASES.
// para leer .env
require('dotenv').config();
// Servidor de express
const Server = require('./models/server');


const server = new Server();
server.execute();




