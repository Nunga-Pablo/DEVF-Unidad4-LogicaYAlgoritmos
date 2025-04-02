const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

function encontrarPareja(arr) 
{
    let inicio = 0;
    let siguiente = 1;

    while (siguiente < arr.length) 
    {
        if(arr[inicio].substring(0,1) === arr[siguiente].substring(0,1))
        {
            return [arr[inicio], arr[siguiente]];
        }
        else
        {
            inicio++;
            siguiente++;
        }
    }
    return null; // Si no se encuentra ningún par
}

console.log(encontrarPareja(invitados));
// Resultado: ["Carlos", "Cecilia"]