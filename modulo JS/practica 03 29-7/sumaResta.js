const prompt = require("prompt-sync")({sigint:true});
let bandera = true;
let a,b;
while(bandera){
    const numerosAB = () =>{
        a = prompt("ingrese el numero a: ");
        b = prompt("ingrese el numero b: ");
        a = parseInt(a);
        b = parseInt(b);
    }
    const suma = () =>{
        numerosAB();
        if(Number.isInteger(a)&&Number.isInteger(b)){
            console.log(" La suma de "+a+" + "+b+" = "+(a+b));
            console.log(" ");
        }
        else{
            console.log("Por favor ingrese un numero correcto.")
        }
    }
    const resta = () =>{
        numerosAB();
        if(Number.isInteger(a)&&Number.isInteger(b)){
            console.log(" La resta de "+a+" - "+b+" = "+(a-b));
        }
        else{
            console.log("Por favor ingrese un numero correcto.")
        }
    }
    const dividir = () =>{
        numerosAB();
        if(Number.isInteger(a)&&Number.isInteger(b)){
            console.log(" La division de "+a+" / "+b+" = "+(a/b))
        }
        else{
            console.log("Por favor ingrese un numero correcto.")
        }
    }
    const tablaMultipli = () =>{
        let num = prompt("Ingrese un numero para saber su tabla de multiplicar:");
        num = parseInt(num);
        if(Number.isInteger(num)){
            for(let i=0; i<=10; i++){
                console.log(num+" * " + i + " = "+num*i);
            }
        }
        else{
            console.log("Por favor ingrese un numero correcto.")
        }

    }
    console.log(" ");
    console.log("1.- Para sumar dos numerosc(a+b)"); 
    console.log("2.- Para restar (a-b)"); 
    console.log("3.- dividir a/b"); 
    console.log("4.- Tabla de multiplicar:");
    console.log("0.- Presione cero para cerrar el programa.");
    console.log(" ") 
    let opcion = prompt("Ingrese una opcion:");
    switch(opcion){
        case '1':
            console.log("suma");
            suma();
            console.log("**************");
            break;
        case '2':
            console.log("resta");
            resta();
            console.log("**************");
            break;
        case '3': 
            console.log("Division");
            dividir();
            console.log("**************");
            break;
        case '4':
            console.log("multiplicacion");
            tablaMultipli();
            console.log("**************");
            break;
        case '0':
            console.log("Cerrando programa");
            console.log("++++");
            

            bandera = false;
            break;
        default:
            console.log("Elija una opcion correcta");
            console.log("++++");
            break;
    }






}
