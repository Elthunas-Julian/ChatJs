const fs = require('fs');


const rutaarchivo = 'C:\\Users\\julia\\Downloads\\imagen\\archivo.txt'; 


fs.readFile(rutaarchivo, 'utf8', (error, datos) => {
  if (error) {
    console.error('Los archivos no se pueden leer:', error.message);
    return;
  }
  
  console.log('Datos del archivo:');
  console.log(datos);
});
