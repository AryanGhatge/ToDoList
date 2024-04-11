let todoList = [];

dispalyTasks();

function addTask() {
    let inputTask = document.querySelector('#input');
    let todoDate = document.querySelector('#todo-date');
    let inputValue = inputTask.value;
    let inputDateValue = todoDate.value;

    if (inputValue.trim() !== '' && inputDateValue !== '') {
        todoList.push({ item: inputValue, duedate: inputDateValue });
        inputTask.value = '';
        todoDate.value = '';
        dispalyTasks();
    } else {
        alert('Please enter a task and select a due date.');
    }
}

function dispalyTasks() {
    let containerElement = document.querySelector('.todo-container');
    let newHtml = "";

    containerElement.innerText = ""; // Clear previous content

    for (let i = 0; i < todoList.length; i++) {
        let { item, duedate } = todoList[i];
        newHtml += `
            <div class="task-item">
                <span>${item}</span>
                <span>${duedate}</span>
                <button class="delete-todo" onclick="deleteTask(${i})">Delete</button>
            </div>
        `;
    }

    containerElement.innerHTML = newHtml;
}

function deleteTask(index) {
    todoList.splice(index, 1);
    dispalyTasks();
}
