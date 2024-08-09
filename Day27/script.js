const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

let tasks = [];

taskForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('due-date').value;

    const task = {
        id: Date.now(),
        title,
        description,
        dueDate
    };

    tasks.push(task);
    renderTasks();
    taskForm.reset();
});

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <div>
                <h3>${task.title}</h3>
                <p>${task.description}</p>
                <small>Due: ${task.dueDate}</small>
            </div>
            <div>
                <button class="edit-btn" onclick="editTask(${task.id})">Edit</button>
                <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;
        taskList.appendChild(taskItem);
    });
}

function editTask(id) {
    const task = tasks.find(t => t.id === id);
    document.getElementById('title').value = task.title;
    document.getElementById('description').value = task.description;
    document.getElementById('due-date').value = task.dueDate;

    deleteTask(id);
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}
