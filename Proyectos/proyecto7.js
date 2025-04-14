// Dado un arreglo de números, implementa una función que utilice el enfoque Divide and Conquer para encontrar el número máximo.

function findMax(arr) 
{
    // TODO: Agregar la condición del caso base
    if (arr.length === 1) 
    {
        return arr[0];
    }

    // TODO: Dividir el arreglo en dos mitades
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // TODO: Llamar recursivamente a la función para ambas mitades
    const leftMax = findMax(left);
    const rightMax = findMax(right);

    // TODO: Combinar las soluciones comparando los máximos
    return Math.max(leftMax,rightMax);
}
// Ejemplo de entrada
const numbers = [3, 8, 20, 2, 10, 5, 7, 15];
console.log(findMax(numbers)); // Salida esperada: 20