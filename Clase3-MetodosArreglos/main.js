const letras = ["H", "o", "l", "a"];

let palabra = letras.reduce((palabra,letra) => palabra + letra);
console.log(palabra); //sumar caracteres = cocatenarlos

//es igual a
let palabraFor = '';
for(let i = 0; i <letras.length; i++)
{
    palabraFor += letras[i];
}

console.log(palabraFor);

const tareas =
[
    {
        nombre: "Lavar trastes",
        pendiente: true
    },
    {
        nombre: "Hacer tarea",
        pendiente: true
    },
    {
        nombre: "Limpiar cuarto",
        pendiente: true
    },
    {
        nombre: "Sacar la basura",
        pendiente: true
    },
    {
        nombre: "Estudiar JS",
        pendiente: true
    },
]

let SonPendientes = tareas.every((tarea) => tarea.pendiente); //evalua que todas las tareas sean pendientes
console.log(SonPendientes);

//es igual a

let resultado = true
let elementoActual = tareas[0].pendiente;
for (let i = 1; i < tareas.length; i++)
{
    if(elementoActual != tareas[i].pendiente)
    {
        resultado = false
    }
    elementoActual = tareas[i].pendiente;
}

console.log(resultado);

function verificarAtributo(arr,key)
{
    let elementoActual2 = arr[0][key];
    for(let i = 1; i < arr.length; i++ )
    {
        if(elementoActual2 != arr[i][key])
        {
            return false
        }
        elementoActual2 = arr[i][key]
    }
    return true;
    
}

console.log(verificarAtributo(tareas, "pendiente"));

const productos =
[
    {
        nombre: "Platano",
        precio: 20
    },
    {
        nombre: "Platano",
        precio: 20
    },
    {
        nombre: "Platano",
        precio: 20
    },
    {
        nombre: "Platano",
        precio: 20
    },
    {
        nombre: "Platano",
        precio: 20
    },
]

console.log(verificarAtributo(productos,"nombre"));

const incluyeO = letras.includes("o")

console.log(incluyeO);


const unaTaraCumplida = tareas.some((tareas) => tareas.pendiente === true);
console.log(unaTaraCumplida);


const carritoCompras = 
{
    productos: [],
    agregarProducto: function(producto)
    {
        this.productos.push(producto.toLowerCase());
    },
    eliminarProducto: function(producto)
    {
        let indiceProducto = this.productos.indexOf(producto.toLowerCase());
        if(indiceProducto === -1)
        {
            console.log('No se encontró ningún producto con el nombre ' + producto);
            return;
        }
        this.productos.splice(indiceProducto,1)
    },
    mostrarProductos: function()
    {
        this.productos.forEach((producto) => console.log(producto));
    }
}

carritoCompras.agregarProducto("Manzana");
carritoCompras.agregarProducto("Fresas");
carritoCompras.agregarProducto("Kiwi");

carritoCompras.mostrarProductos();

carritoCompras.eliminarProducto("Platano");

carritoCompras.mostrarProductos();
