//init an array to store tasks
let tasks = [];

//Add an event listener to add tasks to the add task btn
document.getElementById('addTaskBtn').addEventListener('click', function () {
  //Storing text calue from input box as a variable 'taskInput'
  let taskInput = document.getElementById('taskInput').value;

  if (taskInput) {
    tasks.push(taskInput);
    document.getElementById("taskInput").value = '';
    DisplayTasks();
  }
});
