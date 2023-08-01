/**
1.- ingresado tres valores por el usuario, 
saber cual es el mayor de los tres y el menor de los tres.
2.- realzar la tabla de multiplicar dado un valor por el usuario. ejemplo 8 x 1 = 8
3.- relizar la tabla de dividir. */
const prompt = require("prompt-sync")({sigint:true});


console.log("***********************");
console.log("Elija una opcion");
console.log("1: para buscar el mayor y menor de tres numeros");
console.log("2: tablas de multiplicar");
console.log("3: tabla de dividir");
console.log("***********************");

let opcion = prompt();
switch(opcion){
    case "1" : 
    opcion1();
    break;

    case "2" : 
    opcion2();
    break;

    case "3" :
    opcion3();
    break;

    default: console.log("Numero fuera de rango. Ingrese una opcion.");
}

    function opcion1(){
        console.log("***********************");
        console.log("ingresa tres valores: ");
        let a = prompt("primer valor : ");
        let b = prompt("segundo valor : ");
        let c = prompt("tercer valor : ");
        console.log("***********************");
        function buscaMayorMenor(a,b,c){
            let mayor, menor;
            mayor = Math.max(a,b,c);
            menor = Math.min(a,b,c);

            return {mayor,menor};
        }
        a = parseInt(a);
        b = parseInt(b);
        c = parseInt(c);

        if(Number.isInteger(a)&&Number.isInteger(b)&&Number.isInteger(c)){
            const resultado = buscaMayorMenor(a,b,c);
            console.log("El numero mayor es: ",resultado.mayor);
            console.log("El numero menor es: ", resultado.menor);
        }else{
            console.log("No se pudo completar la operacion porque el numero ingresado no es un numero.");
        }
    }
    function opcion2(){
        console.log("***********************");
        console.log("Quiere conocer la tabla de multiplicar de: ");
        let a = prompt();
        a = parseInt(a);

        if(Number.isInteger(a)){
            tablaMultiplicar(a);
        }
        else{
            console.log("numero ingresado incorrecto")
        }
       
        console.log("***********************");
    }
    
    function opcion3(){
        console.log("***********************");
        let a =prompt("ingrese un numero para conocer la tabla de dividir: ");
        a = parseInt(a);

        if(Number.isInteger(a)){
            tablaDividir(a);  
        }
        else{
            console.log("numero ingresado incorrecto");
        }
        console.log("***********************");
    }


    function tablaDividir(a){
        let resultado = 0;
        for(let i = 1; i<=10; i++){
            resultado += a*i;
            console.log( (a*i) + " / " + a +" = " +(a*i)/a);
        }
    } 
    function tablaMultiplicar(a){
        console.log("La tabla de multiplicar de: ", a);
        for(let i = 0; i<=10 ; i++){
            console.log(i+" * "+a+" = " + (a*i));
        }
    }