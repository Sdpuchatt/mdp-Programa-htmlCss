const botonCambiar = document.getElementById("cambiar");
const contenedor = document.querySelector(".contenedor");

botonCambiar.addEventListener("click", cambio);

function cambio(){
    contenedor.style.gridTemplateAreas = '"caja1""caja2""caja3"';
    console.log("Cambie");
}

const botonVolver = document.getElementById("volver");
botonVolver.addEventListener("click",volver);

function volver(){
    contenedor.style.gridTemplateAreas = '"caja1 caja2""caja3 caja3"';
    console.log("Volvi a como estaba");
}