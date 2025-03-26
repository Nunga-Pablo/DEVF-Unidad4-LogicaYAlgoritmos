// viajes.js

// Array para guardar los destinos
const destinos = [];

// Función para registrar un destino de viaje
export const registrarDestino = (destino, fecha, transporte, personas) => 
{
    // TODO: Crear un objeto con los datos del destino
    const nuevoViaje = 
    {
        destino: destino,
        fecha: fecha,
        transporte: transporte,
        personas: personas,
        costo: calcularCosto(destino, transporte, personas)
    };

    destinos.push(nuevoViaje);
}

// Función para calcular el costo del viaje
export const calcularCosto = (destino, transporte, personas) => 
{
    let costoBase = 0;

    // Costo base por destino
    if (destino === "Paris") 
    {
        costoBase = 500;
    } 
    else 
        if (destino === "Londres") 
        {
            costoBase = 400;
        } 
        else 
            if (destino === "New York") 
            {
                costoBase = 600;
            }
            else 
                if (destino === "CDMX") 
                {
                    costoBase = 300;
                }

    // Costo adicional por tipo de transporte
    if (transporte === "Avión") 
    {
        costoBase += 200;
    } 
    else 
        if (transporte === "Tren") 
        {
            costoBase += 100;
        }
        else 
            if (transporte === "Barco") 
            {
                costoBase += 300;
            }

    // Descuento por cantidad de personas
    if (personas === 2) 
        {
            costoBase = costoBase - costoBase*0.2;
        } 
        else 
            if (personas === 3) 
            {
                costoBase = costoBase - costoBase*0.25;
            }
            else 
                if (personas >= 4) 
                {
                    costoBase = costoBase - costoBase*0.3;
                }

    return costoBase;
}

// Función para mostrar el itinerario de los viajes registrados
export const mostrarItinerario = () => 
{
    // TODO: Recorrer el arreglo de destinos y mostrar la información de cada uno
    
    destinos.forEach((viaje) => 
    {
        console.log("Destino: " + viaje.destino);
        console.log("Fecha: " + viaje.fecha);
        console.log("Transporte: " + viaje.transporte);
        console.log("Personas: " + viaje.personas);
        console.log("Costo: $" + viaje.costo);
        console.log("---------------------------");
    });
}