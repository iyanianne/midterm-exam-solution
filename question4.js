// Create a basic CRUD (Create, Read, Update, Delete) 
//      system for a list of tasks.
// Create a model for a task table with fields id, name, 
//      and description.
// Implement functions to add a new task, view all tasks, 
//      update a task, and delete a task.
// Hint: Use JavaScript arrays to store tasks.

const express = require('express');
const app = express();
const port = 3000;

// add middleware
app.use(express.json());

let task =[]
let nextId = 1;

// define a POST
app.post('/tasks', (req, res) => {
    const { name, description } = req.body;
    const newTask = { 
        id: nextId, 
        name: name, 
        description: description 
    };
    task.push(newTask);
    res.status(201).json(newTask);
});

// define a GET 
app.get('/tasks', (req, res) => {
    res.json(task);
});

app.get('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const task = task.find(task => task.id === id);
    if (task) {
        res.json(task);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
});

// define a PUT
app.put('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name, description } = req.body;
    const task = task.find(task => task.id === id);
    if (task) {
        task.name = name;
        task.description = description;
        res.json(task);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
});

// define a DELETE
app.delete('tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = task.findIndex(task => task.id === id);
    if (index !== -1) {
        task.splice(index, 1);
        res.json({ message: 'Task deleted' });
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
});

// start the server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});