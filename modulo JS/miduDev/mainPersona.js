import Persona from "./persona.js";

let sergio = new Persona("sergio","puchatt",34500);
let may = new Persona("may","berenice",34500);
console.log(sergio);

const contenidoPersona = document.getElementById("contenidoPersona");

const li = document.createElement('li');
const li2 = document.createElement('li');
li.textContent = ` ${sergio.toString()}`
li2.textContent = `${may.toString()}`; 
contenidoPersona.appendChild(li);
contenidoPersona.appendChild(li2);



