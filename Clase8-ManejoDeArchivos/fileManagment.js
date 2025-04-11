const {error} = require("console");
const fs = require("fs");

fs.appendFile("miArchivo.txt", "Este es mi primer archivo credado con Node.js", function(err)
{
    if(err)
    {
        throw err;
    }
    console.log("Guardado!");
});

fs.unlink('miArchivo2.txt', function(err)
{
    if(err)
    {
        throw err
    }
    console.log('File deleted');
})

const convertedJSON = JSON.stringify(miJson);
console.log(convertedJSON);

fs.appendFile
(
    "JSONData.txt",
    convertedJSON,
    function(err)
    {
        if(err)
        {
            throw err;
        }
        console.log("JSON Guardado");
    }
);

fs.readFile
(
    "JSONData.txt",
    function(err, data)
    {
        if(err)
        {
            throw err;
        }
        fileData = data;
    }
);

async function ReadFile(file)
{
    
}