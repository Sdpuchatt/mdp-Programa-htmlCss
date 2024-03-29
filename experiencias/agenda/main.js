const nombre = document.querySelector(".nombre");
const numero = document.querySelector(".numero");
const direccion = document.querySelector(".direccion");

const btnAgregarTarea = document.querySelector(".btn-agregar-tarea");

const listadoTareas = document.querySelector(".listado-tareas");

const db = window.localStorage;


function guardarContacto (db, contacto){
    db.setItem(contacto.id,JSON.stringify(contacto));
    window.location.href = '/experiencias/agenda';
}

btnAgregarTarea.addEventListener("click",function(){
    let contacto = {
        id : Math.random(1,100),
        nombre : nombre.value,
        numero : numero.value,
        direccion : direccion.value
    };
    guardarContacto(db,contacto);
});
function crearContacto(parentNode, contacto, db){
    let divContacto = document.createElement('div');
    let nombreContacto = document.createElement('h3');
    let numeroContacto = document.createElement('p');
    let direccionContacto = document.createElement('p');
    let iconoBorrar = document.createElement('span');

    nombreContacto.innerHTML = contacto.nombre;
    numeroContacto.innerHTML = contacto.numero;
    direccionContacto.innerHTML = contacto.direccion;
    iconoBorrar.innerHTML = 'delete_forever';

    divContacto.classList.add('tarea');
    iconoBorrar.classList.add('material-symbols-outlined', 'icono');

    iconoBorrar.addEventListener('click',function(){
        db.removeItem(contacto.id);
        window.location.href = '/experiencias/agenda';
    });

    divContacto.appendChild(nombreContacto);
    divContacto.appendChild(numeroContacto);
    divContacto.appendChild(direccionContacto);
    divContacto.appendChild(iconoBorrar);

    parentNode.appendChild(divContacto);
}

function cargarContactos(db, parentNode){
    let claves = Object.keys(db);
    for(clave of claves){
        let contacto = JSON.parse(db.getItem(clave));
        crearContacto(parentNode, contacto, db);
    }
};
cargarContactos(db,listadoTareas);

