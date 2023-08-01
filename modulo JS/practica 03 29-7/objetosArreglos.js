let fistName = 'Marcela'
let lastName = 'Puchatt'
let birthDay = 34;
let status = true; 
const person1 = {
    fistName,
    lastName,
    birthDay,
    status
}
const person2 = {
    fistName :'pedro',
    lastName :'taylor',
    birthDay: 30,
    status: false
}
console.log(person1);
console.log(person1.birthDay);

console.log("******************")
console.log("******************")

person3 ={};
person3.fistName = 'romina';
person3.lastName = 'puchatt';
person3.birthDay = 25;
person3.status = false;


const arr1 = [person1, person2, person3]
console.log(arr1);
