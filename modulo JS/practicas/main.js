/**
1. dada dos variables 
realizar las operaciones matematicas siguiente
+ - * /
mediante un swith.
2. calcular si un numero es primo o no.
3. realizar la tabla de multiplicar de un valor x hasta el 10.
 */
let x,y;
x=5,y=10;

console.log("Suma: ", y+x);
console.log("Resta: ",y-x);
console.log("Division: ", y/x);
console.log("Multiplicacion: ",y*x);
console.log("----------------");
function esPrimo (z){
    let esNumeroPrimo = true;
    if (z==2 || z == 3){
        esNumeroPrimo = true;
    }
    else if((z % 2 === 0) || (z % 3 === 0)){
        esNumeroPrimo = false;
    }
    let cadenaTexto = z + ":  " + esNumeroPrimo;
    return (cadenaTexto);
}
console.log(esPrimo(2)); 
console.log(esPrimo(3));
console.log(esPrimo(4));
console.log(esPrimo(x));

console.log("----------------");

console.log(x);
for(let i=1; i<10; i++){
    console.log(esPrimo(i));
}

console.log("----------------");
function tablaMultiplicar(numero){
    console.log("La tabla de multiplicar del "+ numero);
    for(let i=0;i<=10; i++){
        console.log(numero*i);
    }
}
tablaMultiplicar(5);