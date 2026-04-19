# To-Do List Fullstack | Desafio SellFlux

Aplicação fullstack de gerenciamento de tarefas com React no frontend, Node.js/Express no backend e PostgreSQL no banco de dados.

## Stack

- Frontend: React + Vite + Axios + React Toastify
- Backend: Node.js + Express + pg
- Banco de dados: PostgreSQL via Docker Compose

## Pre-requisitos

- Node.js 18 ou superior
- Docker Desktop ou Docker Engine com Docker Compose

## Como rodar

### 1. Suba a stack com Docker Compose

Na raiz do projeto:

```bash
docker compose up -d
```

Esse comando sobe o PostgreSQL e o backend. O banco ja sobe com as credenciais corretas e a tabela `tasks` é garantida automaticamente na inicialização. Não é necessário executar `init.sql` manualmente.

### 2. Rode o backend localmente

Entre em [`backend`](./backend):

```bash
npm install
npm run dev
```

Crie um arquivo `.env` em `backend` com base no `.env.example`.

Variaveis esperadas no `.env`:

```env
PORT=3001
DB_USER=user_tasks
DB_PASSWORD=password_tasks
DB_NAME=tasks_management
DB_HOST=localhost
DB_PORT=5432
```

### 3. Rode o frontend

Entre em [`frontend`](./frontend):

```bash
npm install
npm run dev
```

Crie um arquivo `.env` em `frontend` com base no `.env.example`.

Variavel esperada no `.env` do frontend:

```env
VITE_API_URL=http://localhost:3001/api
```

## Enderecos padrão

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:3001`
- Healthcheck da API: `http://localhost:3001/health`

## Testes

Para rodar os testes do backend:

```bash
cd backend
npm test
```

Os testes validam as rotas reais da API com o banco mockado, cobrindo listagem, criação, validação e erro interno.

## Observacoes importantes

- O arquivo [`init.sql`](./init.sql) continua no projeto e tambem pode ser usado pelo container do PostgreSQL em uma primeira subida limpa.
- Se voce ja tiver um volume antigo do Postgres com estado inconsistente, rode `docker compose down -v` antes de subir novamente.

## Endpoints

- `GET /api/tasks`
- `POST /api/tasks`
- `PATCH /api/tasks/:id`
- `DELETE /api/tasks/:id`

## Exemplos de chamadas da API

Listar tarefas:

```bash
curl http://localhost:3001/api/tasks
```

Criar tarefa:

```bash
curl -X POST http://localhost:3001/api/tasks \
  -H "Content-Type: application/json" \
  -d "{\"title\":\"Estudar Node.js\",\"description\":\"Revisar rotas e controllers\"}"
```

Atualizar status de uma tarefa:

```bash
curl -X PATCH http://localhost:3001/api/tasks/1 \
  -H "Content-Type: application/json" \
  -d "{\"completed\":true}"
```

Excluir tarefa:

```bash
curl -X DELETE http://localhost:3001/api/tasks/1
```
-----

## Desenvolvido por:

**Augusto**

  * **GitHub:** https://github.com/augustomueller
  * **LinkedIn:** www.linkedin.com/in/augusto-mueller-wendt-0074bb272

-----
