const net = require('net');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Por favor, introduce tu nombre: ', (name) => {
    const client = net.createConnection({ host: '20.20.2.147', port: 3000 }, () => {
        console.log('Conectado al servidor. Escribe tus mensajes:');
    });

    client.on('data', (data) => {
        console.log(data.toString().trim());
    });

    rl.on('line', (input) => {
        const date = new Date().toLocaleString();
        const formattedMessage = `(${name}) [${date}]: ${input}`;
        client.write(formattedMessage);
    });

    client.on('end', () => {
        console.log('Desconectado del servidor.');
        rl.close();
    });
});