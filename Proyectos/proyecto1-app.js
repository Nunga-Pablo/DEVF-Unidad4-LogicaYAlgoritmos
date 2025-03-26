// app.js

import { registrarDestino } from './proyecto1-viajes.js';
import { mostrarItinerario } from './proyecto1-viajes.js';

// Iniciar la aplicación

const iniciarApp = () => 
{
    // Ejemplo de cómo registrar destinos con 1 persona
    registrarDestino("Paris", "2024-06-15", "Avión", 1);
    registrarDestino("Londres", "2024-07-01", "Tren", 1);
    registrarDestino("New York", "2024-08-09", "Barco", 1);
    registrarDestino("CDMX", "2024-10-28", "Avión", 1);

    // Ejemplo de cómo registrar destinos con mas de una persona para descuento
    registrarDestino("CDMX", "2024-10-28", "Avión", 2);
    registrarDestino("CDMX", "2024-10-28", "Avión", 3);
    registrarDestino("CDMX", "2024-10-28", "Avión", 4);

    // Mostrar el itinerario de los viajes
    mostrarItinerario();
}

// Ejecutar la aplicación
iniciarApp();