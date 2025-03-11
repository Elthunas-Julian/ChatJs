const net = require('net');

const clients = [];

const server = net.createServer((socket) => {
    console.log('Un nuevo cliente se ha conectado.');

    clients.push(socket);

    socket.on('data', (data) => {
        const message = data.toString().trim();
        console.log(`Mensaje recibido: ${message}`);
        clients.forEach((client) => {
            if (client !== socket) {
                client.write(message + '\n');
            }
        });
    });

    socket.on('end', () => {
        console.log('Un cliente se ha desconectado.');
        clients.splice(clients.indexOf(socket), 1);
    });
});

server.listen(3000, () => {
    console.log('Servidor funcionando en el puerto 3000.');
});
