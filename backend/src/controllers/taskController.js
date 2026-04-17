const db = require('../models/db');

const getTasks = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM tasks ORDER BY created_at DESC');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("ERRO TÉCNICO:", error);
    res.status(500).json({ error: 'Erro ao buscar tarefas' });
  }
};

const createTask = async (req, res) => {
  const { title, description } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'O título é obrigatório' });
  }
  try {
    const query = 'INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING *';
    const result = await db.query(query, [title, description]);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Erro na criação de tarefas' });
  }
};


const updateTaskStatus = async (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  try {
    const result = await db.query(
      'UPDATE tasks SET completed = $1 WHERE id = $2 RETURNING *',
      [completed, id]
    );
    if (result.rows.length === 0) return res.status(404).json({ error: 'Tarefa não encontrada' });
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar' });
  }
};


const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query('DELETE FROM tasks WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Tarefa não encontrada' });
    res.json({ message: 'Tarefa removida com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir' });
  }
};

module.exports = { getTasks, createTask, updateTaskStatus, deleteTask };

