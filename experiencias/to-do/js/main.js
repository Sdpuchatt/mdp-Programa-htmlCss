window.onload = () =>{
    const formulario = document.getElementById("todo-form");
    formulario.onsubmit = (e) => {
        e.preventDefault();
        const todo = document.getElementById("todo");
        const todoText = todo.value;
        todo.value = '';
        console.log(todoText);
    }
}