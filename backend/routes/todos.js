const express = require('express');
const router = express.Router(); 

let todos = [
  { id: 1, title: 'Buy milk', done: false },
  { id: 2, title: 'Read book', done: false }
];

router.get('/', (req, res) => res.json(todos));

router.post('/', (req, res) => {
  const { title } = req.body;
  const newItem = { id: Date.now(), title, done: false };
  todos.push(newItem);
  res.status(201).json(newItem);
});

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  todos = todos.filter(t => t.id !== id);
  res.status(204).send();
});

module.exports = router; 
