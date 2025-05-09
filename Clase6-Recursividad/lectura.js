//RECURSIVIDAD

// Ejemplo básico: Factorial de un número

function factorial(n) 
{
    // Caso base: si n es 0, el factorial es 1
    if (n === 0) 
    {
        return 1;
    }

    // Llamada recursiva: multiplicar n por el factorial de n-1
    return n * factorial(n - 1);
}

console.log(factorial(5)); // Salida: 120

// Backtracking

// Ejemplo: Generar combinaciones de letras

function generateCombinations(letters, current, index, results) 
{
    // Agregar la combinación actual al resultado
    results.push(current);

    // Iterar a partir del índice actual
    for (let i = index; i < letters.length; i++) 
    {
        // Llamar recursivamente añadiendo la letra actual
        generateCombinations(letters, current + letters[i], i + 1, results);
    }
}

function findAllCombinations(letters) 
{
    const results = [];
    generateCombinations(letters, '', 0, results);
    return results;
}

// Ejemplo de uso
const letters = ['a', 'b', 'c'];
console.log(findAllCombinations(letters));

/*
Salida esperada:

[
    '',        'a',       'ab',

    'abc',     'ac',      'b',

    'bc',      'c'
]
*/