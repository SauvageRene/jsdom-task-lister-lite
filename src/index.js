// // document.addEventListener("DOMContentLoaded", () => {
// //   // your code here

// // });

// const main = document.querySelector("#main-content")
// console.log(main)

// const taskForm = document.querySelector("#create-task-form")
// const taskList = document.querySelector("#tasks")
// taskForm.addEventListener("submit", function(e) {
//   e.preventDefault()
//   // user input
//   const newTask = document.querySelector("#new-task-description").value
//   // slap it on the document 
//   // where?
//   const taskItem = document.createElement("li");

//   taskItem.innerText = newTask

//   taskList.appendChild(taskItem)
//   taskForm.reset()

// }) 
// delete button ?
// not saving? 


document.addEventListener("DOMContentLoaded", () => {
  //grab all the necessary DOM elements

  //form and relevant input fields
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const newTaskPriority = document.getElementById("new-task-priority");

  //ul where new tasks will live on the DOM
  const newTaskUl = document.getElementById("tasks");

  //attach event listeners
  newTaskForm.addEventListener("submit", createNewTask);
});

const createNewTask = event => {
  event.preventDefault();
  //stop form from trying to submit
  const newTaskDescription = document.getElementById("new-task-description");
  const newTask = document.createElement("li");
  newTask.innerText = newTaskDescription.value;

  appendNewTask(newTask);
  event.target.reset();
};

const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
}; 