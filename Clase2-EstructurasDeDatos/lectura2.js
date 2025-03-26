//PILAS

let pila = [];

pila.push("Página 1");

pila.push("Página 2");

pila.push("Página 3");

console.log(pila.pop());  // Imprime "Página 3", la última página visitada

//COLAS

let cola = [];

cola.push("Trabajo 1");

cola.push("Trabajo 2");

cola.push("Trabajo 3");

console.log(cola.shift());  // Imprime "Trabajo 1", el primero en entrar

//CONJUNTOS

let usuarios = new Set();

usuarios.add("Juan");

usuarios.add("Ana");

usuarios.add("Juan");  // No se agrega, porque "Juan" ya está en el conjunto

console.log(usuarios);  // Imprime Set {"Juan", "Ana"}

//MAPAS

let precios = new Map();

precios.set("productoA", 25);

precios.set("productoB", 40);

precios.set("productoC", 15);

console.log(precios.get("productoB"));  // Imprime 40

//ARBOL

let arbol = 
{
    nombre: "Root",

    hijos: 
    [
        { nombre: "Carpeta 1", hijos: [] },
        { nombre: "Carpeta 2", hijos: [{ nombre: "Subcarpeta", hijos: [] }] }
    ]
};