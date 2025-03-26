// Lista de compras CON DUPLICADOS

console.log("Lista de compras con duplicados usando arreglos: \n\n")

let listaDeCompras = [];

const agregarProducto = (producto) => listaDeCompras.push(producto);

const eliminarProducto = (producto) => listaDeCompras.splice(listaDeCompras.indexOf(producto),1);

const mostrarLista = () => console.log(listaDeCompras);

agregarProducto("Leche");
agregarProducto("Huevo");
agregarProducto("Mantecada");
agregarProducto("Leche");

mostrarLista();

eliminarProducto("Huevo");

mostrarLista();

// Lista de compras SIN DUPLICADOS

console.log("\n \n Lista de compras sin duplicados usando set: \n\n")

let listaCompras = new Set();

const agregarProducto2 = (producto) => 
{
    if(listaCompras.has(producto))
    {
        console.log(producto +  " ya está en la lista");
    }
    else
    {
        listaCompras.add(producto);
    }
}

const eliminarProducto2 = (producto) => listaCompras.delete(producto);

const mostrarLista2 = () => console.log(listaCompras);

agregarProducto2("Zanahoria");
agregarProducto2("Espinaca");
agregarProducto2("Zanahoria");
agregarProducto2("Nuez");

mostrarLista2();

eliminarProducto2("Espinaca");

mostrarLista2();
