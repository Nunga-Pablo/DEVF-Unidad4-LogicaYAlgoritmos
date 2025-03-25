const calculateArea = (width, height) => 
{
    let base = width;       // Declara base con let
    const multiplier = 2;   // Declara multiplier como constante
    return base * height * multiplier; 
};

console.log(calculateArea(5, 10));  // Cambia los valores para probar diferentes áreas

const fetchUserData = () => 
{
    return new Promise(resolve => 
    {
        setTimeout(() => 
        {
            resolve({ id: 1, name: "Alice" });  // Objeto que simula datos de usuario
        }, 2000);
    });
};

const getUser = async () => 
{
    const userData = await fetchUserData();  // Espera a que se resuelva la promesa
    console.log(userData);  // Muestra el resultado en consola
};

getUser();

// CLASES

class Producto  
{
    constructor(nombre, precio) 
    {
        this.nombre = nombre;
        this.precio = precio;
    }

    obtenerDetalles() 
    {
        return `Producto: ${this.nombre}, Precio: ${this.precio}`;
    }
}

const producto1 = new Producto('Laptop', 1200);
console.log(producto1.obtenerDetalles());

//EJERCICIO PRACTICO

class Producto2
{
    constructor(nombre, precio, cantidad) 
    {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    obtenerDetalles() 
    {
        return `${this.nombre} - Precio: ${this.precio} - Stock: ${this.cantidad}`;
    }

    actualizarStock(cantidad) 
    {
        this.cantidad += cantidad;
    }
}

const producto2 = new Producto2('Camiseta', 25, 100);
producto2.actualizarStock(-20);
console.log(producto2.obtenerDetalles());  // Camiseta - Precio: 25 - Stock: 80