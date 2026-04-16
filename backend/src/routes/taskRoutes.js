const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/tasks', taskController.getTasks);
router.post('/tasks', taskController.createTask);
router.patch('/tasks/:id', taskController.updateTaskStatus);
router.delete('/tasks/:id', taskController.deleteTask);

module.exports = router;