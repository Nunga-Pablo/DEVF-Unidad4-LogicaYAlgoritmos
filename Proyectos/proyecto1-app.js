// app.js

import { registrarDestino } from './proyecto1-viajes.js';
import { mostrarItinerario } from './proyecto1-viajes.js';

// Iniciar la aplicación
const iniciarApp = () => 
{
    // Ejemplo de cómo registrar destinos
    registrarDestino("Paris", "2024-06-15", "Avión");
    registrarDestino("Londres", "2024-07-01", "Tren");

    // Mostrar el itinerario de los viajes
    mostrarItinerario();
}

// Ejecutar la aplicación
iniciarApp();