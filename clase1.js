//funcion normal

const suma = function(a,b)
{
    return a+b;
}

console.log(suma(5,8))

//funcion con arrow, si se colocan llaves {} necesariamente hay que colocar return, sin ellas es implicito

const suma2 = (a,b) => a + b;

console.log(suma2(5,8))



const generarMensajeSaludo = (nombre) => "Hola, " + nombre;

console.log(generarMensajeSaludo("Pablo"));



const array = [1,2,3,4,5,6,7,8,9];

array.forEach((item, index) => 
{
    console.log(item + 1);
});

const newArray = array.map((item, index) => 
{
    return item**2;
});

newArray.forEach((item) => 
{
    console.log(item);
});

//

let nombre = "Pablo";

const miDiv = document.querySelector(".mi-div");
miDiv.insertAdjacentHTML("beforeend", 
`
    <p>Este elemento p ha sido insertado utilizando JS ${nombre} </p>
`);

miDiv.insertAdjacentHTML("beforeend", 
`
    <p>${array.map((item) => item)}</p>
`);

const pElements = array.map((item) => 
{
    return `<h1>${item}</h1>`
});

pElements.forEach((element) => 
{
    miDiv.insertAdjacentHTML("beforeend", element)
})

//objetos

const options = 
{
    isEnabled: true,
    time: 15,
    code: "Aproved"
}

const {isEnabled, time, code} = options;

console.log(isEnabled, time, code);