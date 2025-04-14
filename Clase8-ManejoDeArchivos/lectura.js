// VERIFICAR SI EXISTEN ARCHIVOS

// Importando el módulo fs
const fs = require('fs');

// Verificando si un archivo existe
const filePath = './Clase8-ManejoDeArchivos/example.txt';

if (fs.existsSync(filePath)) 
{
    console.log('El archivo existe.');
} 
else 
{
    console.log('El archivo no existe.');
}

// LEER ARCHIVOS

fs.readFile('./Clase8-ManejoDeArchivos/example.txt', 'utf8', (err, data) => 
{
    if (err) 
    {
        console.error('Error al leer el archivo:', err);
        return;
    }

    console.log('Contenido del archivo:', data);
});

// ESCRIBIR ARCHIVOS 

fs.writeFile('./Clase8-ManejoDeArchivos/example.txt', 'Hola, Node.js!', (err) => 
{
    if (err) 
    { // manejo de errores
        console.error('Error al escribir en el archivo:', err);
        return;
    }

    console.log('Archivo escrito con éxito.');
});

// ELIMINAR ARCHIVOS

fs.unlink('./Clase8-ManejoDeArchivos/example.txt', (err) => 
{
    if (err) 
    {
        console.error('Error al eliminar el archivo:', err);
        return;
    }

    console.log('Archivo eliminado con éxito.');
});

