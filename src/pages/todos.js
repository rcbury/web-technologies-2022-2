import Todo from "../services/todo.js";
import Auth from "../services/auth.js";
import location from "../services/location.js";
import loading from "../services/loading.js";

const getAllTodos = async () => 
{
    return await Todo.getAll();
}

const renderTodos = async () => 
{
    console.log('todo render start');
    const todos = await getAllTodos();
    console.log(todos);
    const todosEl = document.getElementsByClassName('todos')[0];
    todosEl.replaceChildren();
    todos.data.map((todo) => 
    {
        const container = document.createElement('div');
        const checkbox = document.createElement('input');
        const description = document.createElement('input');
        const id = document.createElement('span');
        const userId = document.createElement('span');
        const editButton = document.createElement('button');
        editButton.innerText = "Edit";
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete todo';
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed === "true";
        checkbox.onchange = async (e) => 
        {
            const tempData = structuredClone(todo);
            tempData.completed = `${e.target.checked}`;
            await Todo.update(tempData);
            await renderTodos();
        }
        deleteButton.onclick = async () => 
        {
            await Todo.delete(todo.id);
            await renderTodos();
        }
        description.value = todo.description;
        description.disabled = true;
        id.innerText = 'id:' + todo.id;
        userId.innerText = 'userid:' + todo.userId;
        container.style = "display:flex; flex-direction: row; justify-content:space-between; gap: 5px;"
        container.appendChild(checkbox);
        container.appendChild(description);
        container.appendChild(id);
        container.appendChild(userId);
        container.appendChild(deleteButton);
        todosEl.appendChild(container);
    });
    console.log('todo rendered');
}

const init = async () => {
    const { ok: isLogged } = await Auth.me()

    if (!isLogged) {
        return location.login()
    } else {
        loading.stop()
    }

    let inputValue = "";

    const addButton = document.createElement('button');

    const inputField = document.createElement('input');

    inputField.placeholder = "Description of todo";

    inputField.onchange = (e) => 
    {
        inputValue = e.target.value;
        console.log(inputValue);        
    }

    addButton.innerText = "Add new todo!";

    const main = document.getElementsByClassName('main')[0];

    addButton.onclick = async (e) => 
    {
        await Todo.create(inputValue);
        await renderTodos();
    }

    const todoInput = document.getElementsByClassName('todo-input')[0];

    todoInput.appendChild(inputField);
    todoInput.appendChild(addButton);

    renderTodos();
}

if (document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", init)
} else {
    init()
}
