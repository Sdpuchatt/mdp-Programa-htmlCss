const prompt = require("prompt-sync")({sigint:true});
//npm install prompt-sync

let numeros = [];

numeros.push(1,2,3,4,5);
console.log(numeros);
numeros.unshift(-100,-200);

// console.log(numeros);
// console.log(numeros.pop());
// console.log(numeros.shift());
// console.log(numeros);
let otroNumeros = numeros.filter(function (x) {
    return x>3;
});
otroNumeros = numeros.filter(x=>x>4);
console.log(otroNumeros);
console.log(numeros.includes(-100));
console.log(numeros.includes(100));



