const todos = [];

window.onload = () =>{
    const formulario = document.getElementById("todo-form");
    formulario.onsubmit = (e) => {
        e.preventDefault();
        const todo = document.getElementById("todo");
        const todoText = todo.value;
        todo.value = '';
        console.log(todoText);
        todos.push(todoText);

        const todoList = document.getElementById("todo-list");
        const todoTemplate = todos.map(t => '<li>'+t+'</li>' );
        todoList.innerHTML = todoTemplate.join('');

        // todoList.innerHTML= '';
        // for(let i=0; i < todos.length;i++){
        //     todoList.innerHTML += '<li>'+todos[i]+'</li>';
        // }
    }
}