let dataPersona =[];
const addDataPersona = (firstName,lastName,birthday,address,status,dni,condition=true) =>{
    let person ={
        dni,
        firstName,
        lastName,
        birthday,
        address,
        status
    }
    if(condition){
        let contador = 0;
        for(let i=0; i<dataPersona.length; i++){
            if(parseInt(dataPersona?.dni) == parseInt(person.dni)){
                contador ++;
            }
        }

        if(contador == 0){
            dataPersona.push(person);
        }
    }
    

}

const addFormPerson = () =>{
    let firstName = document.getElementById("fistName");
    let lastName = document.getElementById("lastName");
    let birthday = document.getElementById("birthday");
    let address = document.getElementById("address");
    let status = document.getElementById("status");
    let dni = document.getElementById("dni");
    console.log(firstName.value);
    
    addDataPersona(firstName.value,lastName.value,birthday.value,address.value,status.value,dni.value);
    firstName.value ='';
    lastName.value='';
    birthday.value='';
    address.value='';
    status.value='';
    dni.value='';
    Swal.fire('Saved!', '', 'success')
    firstName.focus();
    
    console.table(dataPersona);
}

/** 1.- EVITAR QUE EL USUARIO INGRESE DATOS VACIOS.
 *  2.- EVITAR DUPLICIDAD DE DATOS POR EL DNI
 */