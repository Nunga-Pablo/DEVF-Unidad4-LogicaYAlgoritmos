// Copy code
// Lista de regalos
const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];

// TODO: Completa esta función para que busque recursivamente el regalo en la lista
function findGift(gifts, giftName, index = 0) 
{
    // Caso base: Si llegamos al final de la lista
    // TODO: Incluye el caso base donde se llega al final de la lista.
    if (index === gifts.length) 
    {
      return `${giftName} no está en la lista.`;
    }

    // TODO: Incluye el caso base donde se encuentra el regalo.

    if (gifts[index] === giftName) 
    {
      return `${giftName} está en la posición ${index}`;
    }

    // TODO: Realiza la llamada recursiva para seguir buscando el regalo.

    return findGift(gifts, giftName, index = index + 1);
}

// Casos de ejemplo:

// Llama a la función con los datos de entrada y muestra el resultado en la consola.
// Llama a la función y prueba con diferentes regalos
let giftToFind = "Lego";
console.log(findGift(gifts, giftToFind));
// Salida esperada:
// "Lego está en la posición 3."

// Caso cuando el regalo no está en la lista
giftToFind = "Camión";
console.log(findGift(gifts, giftToFind));
// Salida esperada:
// "Camión no está en la lista."

// Otras pruebas
giftToFind = "Carro de juguete";
console.log(findGift(gifts, giftToFind));
// Salida esperada:
// "Carro de juguete está en la posición 1."

giftToFind = "Reloj";
console.log(findGift(gifts, giftToFind));
// Salida esperada:
// "Reloj no está en la lista."