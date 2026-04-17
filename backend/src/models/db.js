const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER || 'user_tasks',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'tasks_management',
  password: process.env.DB_PASSWORD || 'password_tasks',
  port: Number(process.env.DB_PORT) || 5432,
});

const initializeDatabase = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS tasks (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description TEXT,
      completed BOOLEAN DEFAULT FALSE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);
};

module.exports = {
  initializeDatabase,
  query: (text, params) => pool.query(text, params),
};
