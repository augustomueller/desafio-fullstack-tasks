const express = require('express');
const cors = require('cors');
require('dotenv').config();
const taskRoutes = require('./routes/taskRoutes');

const app = express();

// Middlewares - IMPORTANTE: O cors vem antes de tudo!
app.use(cors()); 
app.use(express.json());

// Rotas
app.use('/api', taskRoutes);

app.get('/', (req, res) => {
    res.send('To-Do List API Funcionando!');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});