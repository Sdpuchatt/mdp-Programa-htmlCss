const prompt = require("prompt-sync")({sigint:true});
//npm install prompt-sync

let dataPerson = [];

const addDataPerson = (fistName,lastName,birthDay,status) =>{
    person = {
        fistName,
        lastName,
        birthDay,
        status
    }
    dataPerson.push(person);
}

addDataPerson('jose','rivera',33,0);
addDataPerson('ariel','edmundo',25,0);
addDataPerson('pascuala','lavaca',20,0);
addDataPerson('ismael','hernandez',15,0);
addDataPerson('astor','piazolla',17,0);
addDataPerson('elOfe','edmundo',18,0);
addDataPerson('carlos','gardel',21,0);
addDataPerson('mariano','martinez',40,0);
addDataPerson('mercedes','sosa',65,0);
addDataPerson('violeta','parra',70,0);

console.table(dataPerson);

// dataPerson.forEach((element) => {
//     console.log(element.fistName);
// });
const forDataPerson = (elemento, indice, ) =>{
    //comilla invertida alt + 96; 
    console.log(`nombre: ${elemento.fistName} posicion: ${indice}`)
}
dataPerson.forEach(forDataPerson);

let nuevoDataPerson = dataPerson.filter((element)=>{
    return element.fistName.includes("AS");
});

console.table(nuevoDataPerson);

promedioEdad = () => {
    let edadPromedio = 0;
    for(let i=0; i<dataPerson.length;i++){
        edadPromedio += dataPerson[i].birthDay;
    }
    edadPromedio = edadPromedio/dataPerson.length;
    console.log(`El promedio de edades es: ${edadPromedio}`);
}
promedioEdad();