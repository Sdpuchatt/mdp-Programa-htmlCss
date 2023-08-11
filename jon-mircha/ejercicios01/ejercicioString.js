/**
 * 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
    2) Programa una función que te devuelva el texto recortado según el 
        número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
    3) Programa una función que dada una String te devuelva un Array de textos separados 
        por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
    4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
 */
//1-.
function miFuncion(cadena){
    console.log(typeof cadena)
    cadena = cadena.trim();
    if ((typeof cadena == "string"||typeof cadena == "object") && cadena!==""){
        
        return cadena.length;
    }else{
        return `no es una cadena de texto, ingrese un String`
    }
}
let cadenaDeTexto = "Hola Mundo";
console.log(miFuncion(cadenaDeTexto));
cadenaDeTexto = " ";
console.log(miFuncion(cadenaDeTexto));

//2-.
function miFuncion(cadena,largo){
    if(typeof cadena == "string"){
        cadena = cadena.trim();
    }
    if ((typeof cadena == "string"||typeof cadena == "object") && cadena!==""){
        return cadena.slice(0,largo);
    }else{
        return `no es una cadena de texto, ingrese un String`
    }
}
console.log(miFuncion("Corta longitud",5));
console.log(miFuncion(5,5));
//3-.
function separarString(cadena,simbolo){
    return cadena.split(simbolo)
}
let ejem1 = "soy una cadena de texto me vn a separar en un array";
console.log(separarString(ejem1," "));
//4-.
function repetirString(cadena,repeticion){
    let i = 0;
    let otra = cadena;
    while (i < repeticion-1){
        cadena += ` ${otra}`;
       i++;
    }
    return cadena;
}
console.log(repetirString("hola Mundo",4));
// console.log("hola")
