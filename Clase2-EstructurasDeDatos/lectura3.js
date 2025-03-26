//LISTAS

// Este ejemplo ilustra el comportamiento básico de una lista estática

let listaDeTareas = ["Comprar pan", "Llamar a mamá", "Enviar correo"];

listaDeTareas.push("Ir al gimnasio");  // Añadir una tarea a la lista

console.log(listaDeTareas);

//LISTAS LIGADAS

// Nodo de lista ligada básico

function Nodo(valor) 
{
    this.valor = valor;
    this.siguiente = null;  // Enlace al siguiente nodo
}

// Crear una lista ligada simple
let nodo1 = new Nodo("Página 1");
let nodo2 = new Nodo("Página 2")
let nodo3 = new Nodo("Página 3");

// Enlazar los nodos
nodo1.siguiente = nodo2;
nodo2.siguiente = nodo3;
console.log(nodo1.siguiente.valor);  // Imprime "Página 2"


//CONJUNTO DE ELEMENTOS SETS

let carritoDeCompras = new Set();  // Usamos Set para evitar duplicados

carritoDeCompras.add("Zapatos");

carritoDeCompras.add("Camiseta");

carritoDeCompras.add("Zapatos");  // No se agregará porque "Zapatos" ya está en el conjunto

console.log(carritoDeCompras);  // Imprime Set {"Zapatos", "Camiseta"}


// TABLA HASH

let usuarios = new Map();

usuarios.set("juan123", "password123");

usuarios.set("ana456", "password456");

console.log(usuarios.get("juan123"));  // Imprime "password123"


// COLA DE PRIORIDAD

class ColaDePrioridad 
{
    constructor() 
    {
    this.items = [];
    }

    agregar(item, prioridad) 
    {
        this.items.push({ item, prioridad });
        this.items.sort((a, b) => b.prioridad - a.prioridad);  // Ordena por prioridad
    } 

    extraer() 
    {
        return this.items.shift();  // Extrae el primer elemento (el de mayor prioridad)
    }
}

let cola = new ColaDePrioridad();
cola.agregar("Tarea urgente", 1);
cola.agregar("Tarea normal", 3);
console.log(cola.extraer());  // Imprime { item: "Tarea normal", prioridad: 3 }