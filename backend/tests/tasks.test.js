const request = require('supertest');
const express = require('express');
const app = express();


app.use(express.json());
app.get('/tasks', (req, res) => res.status(200).json([{ id: 1, title: 'Teste' }]));
app.post('/tasks', (req, res) => res.status(201).json({ id: 1, ...req.body }));

describe('Testando as rotas de Tasks', () => {
  
  test('Deve listar as tarefas (GET /tasks)', async () => {
    const res = await request(app).get('/tasks');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test('Deve criar uma nova tarefa (POST /tasks)', async () => {
    const res = await request(app)
      .post('/tasks')
      .send({
        title: 'Tarefa de Teste',
        description: 'Verificando se o POST funciona'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });

});