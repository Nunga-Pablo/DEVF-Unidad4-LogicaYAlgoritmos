function encontrarPar(arr, objetivo)
{
    let izquierda = 0;
    let derecha = arr.length -1;

    while(izquierda < derecha)
    {
        let suma = arr[izquierda] + arr[derecha];
        if(suma === objetivo)
        {
            return [arr[izquierda], arr[derecha]];
        }
        else if(suma < objetivo)
        {
            izquierda ++;
        }
        else
        {
            derecha --;
        }
    }
    return null;
}

let arreglo = [2,7,11,15];
let objetivo = 9;
let resultado = encontrarPar(arreglo, objetivo);
console.log(resultado);


function improvedTwoSum(arr, target)
{
    for(let i = 0; i < arr.length; i++)
    {
        for(let j = i; j < arr.length; j++)
        {
            if(arr[i] + arr[j] === target)
            {
                return [arr[i], arr[j]];
            }
        }
    }
}

let newArr = [10,15,7,11,8,2,44,6]

let improvedResult = improvedTwoSum(newArr, objetivo);
console.log(improvedResult);

const feast = (beast , dish) => (beast.charAt(0) ===  dish.charAt(0) && beast.charAt(beast.length - 1) === dish.charAt(dish.length -1)) ? true : false;

