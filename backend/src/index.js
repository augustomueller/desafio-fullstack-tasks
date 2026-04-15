const express = require('express');
const cors = require('cors');
require('dotenv').config();
const taskRoutes = require('./routes/taskRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Importando as rotas da API
app.use('/api', taskRoutes); 

app.get('/', (req, res) => {
  res.send('To-Do List');
});

app.listen(PORT, () => {
  console.log(`Porta do Servidor rodando em ${PORT}`);
});