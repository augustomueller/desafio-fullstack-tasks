jest.mock('../src/models/db', () => ({
  query: jest.fn(),
  initializeDatabase: jest.fn(),
}));

const request = require('supertest');
const app = require('../src/app');
const db = require('../src/models/db');

describe('Testando as rotas de Tasks', () => {
  let consoleErrorSpy;

  beforeEach(() => {
    jest.clearAllMocks();
    consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleErrorSpy.mockRestore();
  });

  test('Deve listar as tarefas (GET /api/tasks)', async () => {
    db.query.mockResolvedValueOnce({
      rows: [{ id: 1, title: 'Teste', completed: false }],
    });

    const res = await request(app).get('/api/tasks');

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ id: 1, title: 'Teste', completed: false }]);
    expect(db.query).toHaveBeenCalledWith('SELECT * FROM tasks ORDER BY created_at DESC');
  });

  test('Deve criar uma nova tarefa (POST /api/tasks)', async () => {
    db.query.mockResolvedValueOnce({
      rows: [{ id: 1, title: 'Tarefa de Teste', description: 'Verificando POST' }],
    });

    const res = await request(app)
      .post('/api/tasks')
      .send({
        title: 'Tarefa de Teste',
        description: 'Verificando POST',
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(db.query).toHaveBeenCalledWith(
      'INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING *',
      ['Tarefa de Teste', 'Verificando POST']
    );
  });

  test('Deve validar tItulo obrigatorio no POST /api/tasks', async () => {
    const res = await request(app)
      .post('/api/tasks')
      .send({ title: '', description: 'Sem titulo' });

    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual({ error: 'O título é obrigatório' });
    expect(db.query).not.toHaveBeenCalled();
  });

  test('Deve retornar erro 500 quando o banco falhar no GET /api/tasks', async () => {
    db.query.mockRejectedValueOnce(new Error('db down'));

    const res = await request(app).get('/api/tasks');

    expect(res.statusCode).toBe(500);
    expect(res.body).toEqual({ error: 'Erro ao buscar tarefas' });
  });
});
