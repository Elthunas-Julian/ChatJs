
const fs = require('fs');


const rutaarchivo = 'C:\\Users\\julia\\Downloads\\imagen\\archivo.txt'; 


fs.readFile(rutaarchivo, 'utf8', (error, datos) => {
  if (error) {
    console.error('Error al leer el archivo:', error.message);
    return;
  }
  
  console.log('Contenido del archivo:');
  console.log(datos);
});
