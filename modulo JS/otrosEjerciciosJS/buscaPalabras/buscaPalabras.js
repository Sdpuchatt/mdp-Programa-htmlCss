function buscaPalabras(words, word) {
    // tu código aquí
    const indice = words.indexOf(word);
    console.log(indice);
    const nuevoArray = words.filter(word =>  {
      return word.length > indice});
    console.log(nuevoArray)
    return nuevoArray;
  }


 buscaPalabras(['casa', 'coche'], 'casa')
//Expected: ["casa","coche"]

buscaPalabras(['play', 'balon', 'asa', 'taza', 'tio'], 'tio')
//Expected: ["balon"]
buscaPalabras(['play', 'midu', 'asa', 'libro', 'lino', 'dino'], 'dino')