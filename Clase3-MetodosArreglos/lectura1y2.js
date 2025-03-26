//METODO  find()
//El método find() devuelve el primer elemento en un arreglo que cumple con una condición dada. Si ningún elemento cumple la condición, retorna undefined.


const numeros = [10, 20, 30, 40];
const resultado = numeros.find(num => num > 25);
console.log(resultado); // 30


//METODO  map()
//El método map() crea un nuevo arreglo aplicando una función a cada elemento del arreglo original, sin modificar el original.

const numeros2 = [1, 2, 3, 4];
const cuadrados = numeros2.map(num => num ** 2);
console.log(cuadrados); // [1, 4, 9, 16]


//METODO  filter()
// El método filter() devuelve un nuevo arreglo que contiene todos los elementos que cumplen una condición especificada.

const numeros3 = [5, 10, 15, 20];
const mayores = numeros3.filter(num => num > 10);
console.log(mayores); // [15, 20]

//METODO foreach()
// El método forEach() ejecuta una función para cada elemento del arreglo. No devuelve un nuevo arreglo ni modifica el original.

const frutas = ["manzana", "plátano", "naranja"];
frutas.forEach(fruta => console.log(fruta));


//METODO sort()

const numeros4 = [30, 5, 20, 10];
numeros4.sort((a, b) => a - b); // Orden ascendente
console.log(numeros4); // [5, 10, 20, 30]


//METODO reduce()

const numeros5 = [1, 2, 3, 4];
const suma = numeros5.reduce((acumulador, num) => acumulador + num, 0);
console.log(suma); // 10


//METODO some()

const numeros6 = [1, 2, 3, 4];
const hayMayores = numeros6.some(num => num > 3);
console.log(hayMayores); // true


//METODO every()

const numeros7 = [2, 4, 6, 8];
const sonPares = numeros7.every(num => num % 2 === 0);
console.log(sonPares); // true  

//METODO includes()

const frutas1 = ["manzana", "plátano", "naranja"];
const tieneManzana = frutas1.includes("manzana");
console.log(tieneManzana); // true