const net = require('net');

const clients = [];

const server = net.createServer((socket) => {
    console.log('Un nuevo cliente se ha conectado.');

    // Agregar cliente a la lista
    clients.push(socket);

    // Manejar mensajes entrantes
    socket.on('data', (data) => {
        const message = data.toString().trim();
        console.log(`Mensaje recibido: ${message}`);
        // Enviar mensaje a todos los clientes excepto al remitente
        clients.forEach((client) => {
            if (client !== socket) {
                client.write(message + '\n');
            }
        });
    });

    // Manejar desconexión del cliente
    socket.on('end', () => {
        console.log('Un cliente se ha desconectado.');
        clients.splice(clients.indexOf(socket), 1);
    });
});

server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000.');
});
