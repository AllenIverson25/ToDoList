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
  //Get the task list element
  let taskList = document.getElementById('taskList');
  //Clear the task list
  taskList.innerHTML = '';

  //Loop through the tasks array
 tasks.forEach((task, index) => {
    //Create a new list item for each task
    let li = document.createElement('li');
  
    //Add bootstrap classes to the list item
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

 //InnerHtml of the list item
 li.innerHTML = `${task} <button class='btn btn-light btn-sm' onclick='removeTask(${index})'>√</button>`;
 


  //Append the list item to the task list
  taskList.appendChild(li);








})
 }

//Function to remove tasks
function removeTask(index) {
  //Remove the task from the tasks array
  tasks.splice(index, 1);
  //Display the tasks
  displayTasks();
}
