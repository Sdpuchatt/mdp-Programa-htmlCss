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

/**
 *  5) Programa una función que invierta las palabras de una cadena de texto, 
 *      pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
 */
function invierteLaCadenaDeTexto(cadena){
    let aux = "";
    let ultimaPosicion = cadena.length;
    for(let i = 0; i<cadena.length;i++){

        aux += cadena.charAt((ultimaPosicion-1)-i);
        
    }
    return aux;
}
console.log(invierteLaCadenaDeTexto("hola Mundo"));

/**
 * 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, 
        pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
*/
function cuentaPalabras(cadena, palabraABuscar){
    const arrayPalabra = cadena.split(" ")
    console.log(arrayPalabra);
    let contador = 0;
    for(let i = 0; i<arrayPalabra.length;i++){
        if(arrayPalabra[i] === palabraABuscar){
            contador++;
        }
    }
    return contador;
}
console.log(cuentaPalabras("este es un array de un un un una palabras","un"))

/**
    7) Programa una función que valide si una palabra o frase dada, es un palíndromo 
        (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
*/
function esPalindromo (cadena){
    cadena = cadena.toLowerCase();
    let posicionFInal = cadena.length-1;
    let i = 0;
    let cortaFuego = true;
    while(i<cadena.length&&cortaFuego===true){
        if (cadena[i] === cadena[posicionFInal-i]){
            i++;
            cortaFuego = true;
        }
        else{
            cortaFuego = false;
        }
    }
    return cortaFuego;
}
console.log(esPalindromo("SalaSa"))
/**
    8) Programa una función que elimine cierto patrón de caracteres de un texto dado, 
        pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
 */
function eliminaPatronEnCadenaDeTexto(cadena, patron){
    cadena = cadena.replaceAll(patron,"");
    return cadena;
}
console.log(eliminaPatronEnCadenaDeTexto("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"));