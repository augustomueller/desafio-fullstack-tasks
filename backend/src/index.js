require('dotenv').config();
const app = require('./app');
const { initializeDatabase } = require('./models/db');

const PORT = process.env.PORT || 3001;

const startServer = async () => {
  try {
    await initializeDatabase();
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error('Falha ao iniciar a API:', error.message);
    process.exit(1);
  }
};

startServer();
