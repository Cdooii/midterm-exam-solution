/*
Create a basic CRUD (Create, Read, Update, Delete) system for a list of tasks.
Create a model for a task table with fields id, name, and description.
Implement functions to add a new task, view all tasks, update a task, and delete a task.
Hint: Use JavaScript arrays to store tasks.
*/

let tasks = [];
let taskId = 1; // Unique ID counter

// Function to add a new task
function addTask(name, description) {
    const task = { id: taskId++, name, description }; // Structure when adding a task with the needed fields
    tasks.push(task);  // pushes the task to the tasks array
    console.log("Task added:", task);
}

// Function to view all tasks
function viewTasks() {
    if (tasks.length === 0) {
        console.log("No tasks available."); // if the array is empty display this message
    } else {
        console.log("Task List:");
        tasks.forEach(task => console.log(task)); // if not empty will display all tasks in the array
    }
}

// Function to update a task by ID
function updateTask(id, newName, newDescription) { // enter ID of task to update and the updated content
    const task = tasks.find(task => task.id === id); // finds the tasks by ID, to updated the content
    if (task) {
        task.name = newName;
        task.description = newDescription;
        console.log("Task updated:", task);
    } else {
        console.log("Task not found."); // if wrong ID or ID does not exist
    }
}

// Function to delete a task by ID
function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id); // find by ID and delete
    if (index !== -1) {
        const deletedTask = tasks.splice(index, 1);
        console.log("Task deleted:", deletedTask[0]);
    } else {
        console.log("Task not found.");
    }
}
