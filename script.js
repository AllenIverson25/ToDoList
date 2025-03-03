// Add this function at the top of your file
function updateTaskCount() {
  document.getElementById('taskCount').textContent = `Total Tasks: ${tasks.length}`;
}

//init an array to store tasks
let tasks = [];

//Add an event listener to add tasks to the add task btn
document.getElementById('addTaskBtn').addEventListener('click', function () {
  //Storing text calue from input box as a variable 'taskInput'
  let taskInput = document.getElementById('taskInput').value;
  //Check if the input is not empty
  if (taskInput) {
    tasks.push(taskInput);
    //Clear the input box
    document.getElementById("taskInput").value = '';
    //Display the tasks
    displayTasks();
  }

});

//Function to display tasks
function displayTasks() {
    let taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        let li = document.createElement('li');
        li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

        const taskHTML = `
            <span class="task-text">${task}</span>
            <button class="delete-btn" data-index="${index}">×</button>
        `;

        li.innerHTML = taskHTML;
        taskList.appendChild(li);

        // Add click event listener to the delete button
        const deleteBtn = li.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', function() {
            removeTask(index);
        });
    });

    updateTaskCount();
}

//Function to remove tasks
function removeTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

// Event listener for the clear all button
document.getElementById('clearTaskBtn').addEventListener('click', function () {
  //Clear the tasks array
  tasks = [];
  //Display the tasks
  displayTasks();
});
// Add this event listener after your existing code
document.getElementById('taskInput').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    // Prevent default form submission behavior
    event.preventDefault();
    
    let taskInput = document.getElementById('taskInput').value; // Get the input field value
    if (taskInput) { // Check if the input is not empty
      tasks.push(taskInput);  // Add the task to the array
      document.getElementById('taskInput').value = ''; // Clear the input field
      displayTasks(); // Update and display the task list
    }
  }
});