const net = require('net');
const readline = require('readline');

// Configuración para leer desde la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Se sollicita el nombre del usuario al iniciar
rl.question('Por favor, introduce tu nombre: ', (name) => {
    // La conexión al servidor
    const client = net.createConnection({ port: 3000 }, () => {
        console.log('Conectado al servidor. Escribe tus mensajes:');
    });

    // Manejo de mensajes recibidos
    client.on('data', (data) => {
        console.log(data.toString().trim());
    });

    // Enviar mensajes con el nombre incluido
    rl.on('line', (input) => {
        const date = new Date().toLocaleString();
        const formattedMessage = `(${name}) [${date}]: ${input}`;
        client.write(formattedMessage);
    });

    // Manejo de desconexión
    client.on('end', () => {
        console.log('Desconectado del servidor.');
        rl.close();
    });
});
