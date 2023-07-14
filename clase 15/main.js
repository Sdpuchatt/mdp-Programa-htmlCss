const entrada = document.querySelector("#entrada");

const botonAgregar = document.querySelector("#agregar");

const todoList = document.querySelector("#todoList");
botonAgregar.addEventListener("click",function(e){
    e.preventDefault();
    console.log(entrada.value);
    const texto = entrada.value;
    const li = document.createElement("li");
    const p = document.createElement("p");
    
    p.textContent = texto;
    li.appendChild(p);
    todoList.appendChild(li);
});