function sumarPares(numeros) {
    let suma = 0
    let i = 0;
    while(i< numeros.length ){
      if(numeros[i]%2==0){
        suma = suma + numeros[i];
      }
      i++;
    }
    return suma
  }
  console.log(sumarPares([2,2,2,2]));