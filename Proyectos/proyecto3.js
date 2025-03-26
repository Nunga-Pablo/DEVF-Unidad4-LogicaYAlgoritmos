//Proyecto 3

// Arreglo de 5 productos

const productos = 
[
    { nombre: "Camiseta", precio: 60, categoria: "Ropa" },
    { nombre: "Tableta", precio: 750, categoria: "Electrónica" },
    { nombre: "Cuaderno", precio: 45, categoria: "Educación" },
    { nombre: "Zapatos", precio: 80, categoria: "Ropa" },
    { nombre: "Celular", precio: 900, categoria: "Electrónica" },
];


// Uso de filter() para obtener los productos que cuesten menos de $100

console.log("Productos que cuestan menos de 100: \n")
console.log(productos.filter(producto => producto.precio < 100));


// Uso de sort() para ordenar esos productos alfabéticamente por su nombre.

console.log("\n \n Productos ordenados alfabeticamente por nombre: \n")
productos.sort((a, b) => 
{
    if (a.nombre < b.nombre) 
    {
        return -1;
    }
    if (a.nombre > b.nombre) 
    {
        return 1;
    }
    return 0;
});

console.log(productos);


//Uso de map() para generar un nuevo arreglo que contenga solo los nombres de los productos.

console.log("\n \n Todos los nombres de los productos: \n")
console.log(productos.map(producto => producto.nombre));


// (Oppcional) métodos faltantes 

// reduce() para sumar el total a pagar si compramos cada uno de los productos

console.log("\n \n Total a pagar comprando uno de cada producto: \n")
const total = productos.reduce((acumulador,suma) => acumulador + suma.precio, 0);
console.log(total);

// some() para verificar si algun producto es de la categoria de "Educación"

console.log("\n \n Algun producto es de la categoria 'Ropa': \n")
const hayRopa = productos.some(producto => producto.categoria === "Ropa")
console.log(hayRopa);

// every() para ver si todos los productos valen mas de 50 

console.log("\n \n Todos los productos valen mas de 50: \n")
const masDeCien = productos.every(producto => producto.precio > 50);
console.log(masDeCien);