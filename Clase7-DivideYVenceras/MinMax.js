function MinMax(array, startIndex, lastIndex)
{
    if(startIndex === lastIndex)
    {
        return [array[startIndex], array[startIndex]];
    }

    if((lastIndex - startIndex) === 1)
    {
        if(array[startIndex] > array[lastIndex])
        {
            return [array[lastIndex], array[startIndex]];
        }
        else
        {
            return [array[startIndex], array[lastIndex]];
        }
    }
    else
    {
        let mid = Math.floor((startIndex + lastIndex) / 2);
        let [leftMin, leftMax] = MinMax(array, startIndex, mid);
        let [rightMin, rightMax] = MinMax(array, mid + 1, lastIndex);

        return [Math.min(leftMin, leftMin), Math.max(leftMax,rightMax)];
    }
}

const arreglo = Array.from({ length:200 }, () => Math.floor(Math.random() * 1000));
arreglo.sort((a,b) => a-b);

let MinAndMax = MinMax(arreglo,0,arreglo.length -1);

console.log(foundTarget);