const numbers = [9,3,5,6,7,2];

console.log(numbers);

numbers.sort();

console.log(numbers);

const copyOfNumbers = [...numbers];

console.log(copyOfNumbers);

let nombres = ["Diego", "Ana", "Lalo"];

console.log(nombres);

for (let nombre of nombres)
{
    console.log(nombre);
}

const persona =
{
    //Atributos

    nombre: "Pablo",
    edad: 25,

    // Metodos
    saludar: () => 
    {
        console.log("Hola");
    }
}

console.log(persona);

const clavesObjeto = Object.keys(persona);

console.log(clavesObjeto);

persona.saludar();


const frutas = ["manzana", "pera", "mango"];

console.log(frutas);

frutas.shift(); //Remueve primer elemento del arreglo y lo retorna

console.log(frutas);

frutas.unshift("fresa"); //Agregar elemento al inicio de la lista

console.log(frutas);

frutas.pop(); //Quitar ultimo elemento de la lista

console.log(frutas);

frutas.push("sandia"); //Agregar elemento al final de la lista

console.log(frutas);

console.log(frutas.length);