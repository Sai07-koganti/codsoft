document.getElementById('add-task').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = ''; // Clear the input after adding the task
    } else {
        alert('Please enter a task.');
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('task-list');
    const listItem = document.createElement('li');

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    listItem.appendChild(taskSpan);

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', function() {
        listItem.classList.toggle('completed');
    });
    listItem.appendChild(completeButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(listItem);
    });
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);
}
