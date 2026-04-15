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

module.exports = { getTasks, createTask };