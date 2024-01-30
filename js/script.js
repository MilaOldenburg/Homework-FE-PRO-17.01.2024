let btn = document.querySelector(".btn-add");
let todos = [
    { id: 1, label: "Todo 1", completed: false },
    { id: 2, label: "Todo 2", completed: false },
    { id: 3, label: "Todo 3", completed: false },
    { id: 4, label: "Todo 4", completed: false },
];

function createTodoItem(data = todos) {
    let todoList = document.querySelector(".todo__list");
    let completedCountContainer = document.getElementById("completedCount");

    todoList.innerHTML = "";

    data.forEach((todo) => {
        let liElement = document.createElement("li");
        liElement.classList.add("todo__item");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.completed;
        checkbox.addEventListener("change", () => toggleTodoItem(todo.id));

        let labelElement = document.createElement("span");
        labelElement.innerText = todo.label;

        let buttonElement = document.createElement("button");
        buttonElement.classList.add("todo__remove");
        buttonElement.innerText = "Remove";
        buttonElement.addEventListener("click", () => removeTodoItem(todo.id));

        liElement.appendChild(checkbox);
        liElement.appendChild(labelElement);
        liElement.appendChild(buttonElement);

        todoList.appendChild(liElement);
    });

    const completedCount = todos.filter(todo => todo.completed).length;
    completedCountContainer.innerText = `Completed: ${completedCount}`;
}

function toggleTodoItem(id) {
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        createTodoItem();
    }
}

function removeTodoItem(id) {
    todos = todos.filter(todo => todo.id !== id);
    createTodoItem();
}

function createNewTodo() {
    let label = document.querySelector(".todo__label").value;
    todos.push({ id: Date.now(), label, completed: false });
    createTodoItem();
    document.querySelector(".todo__label").value = "";
}

btn.addEventListener("click", createNewTodo);
createTodoItem();