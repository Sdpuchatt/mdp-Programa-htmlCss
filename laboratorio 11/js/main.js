const botonCambiar = document.getElementById("cambiar");
console.log(botonCambiar);
const caja1 = document.querySelector(".caja1");
const caja2 = document.querySelector(".caja2");
const caja3 = document.querySelector(".caja3");
botonCambiar.addEventListener("click", function(){
    caja1.style.width = '100%';
    caja2.style.width = "100%";
    caja3.style.width = "100%";
});
const botonVolver = document.getElementById("volver");

botonVolver.addEventListener("click", function(){
    caja1.style.width = '30%';
    caja2.style.width = "50%";
    caja3.style.width = "70%";
});