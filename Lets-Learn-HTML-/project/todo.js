
function addTask(taskText) {
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');
    taskElement.textContent = taskText;
    document.querySelector('.container').appendChild(taskElement);
}
// Call the function with a task text
addTask('Buy groceries');
function addTask(taskText) {
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');
    taskElement.textContent = taskText;
    document.querySelector('.container').appendChild(taskElement);
}

addTask('clean cloth');
function addTask(taskText) {
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');
    taskElement.textContent = taskText;
    document.querySelector('.container').appendChild(taskElement);
}

addTask('read books');