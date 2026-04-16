# To-Do List Fullstack | Desafio SellFlux

Este projeto é uma aplicação de gerenciamento de tarefas (CRUD) desenvolvida para o processo seletivo da SellFlux. O sistema permite criar, listar, marcar como concluído e excluir tarefas, com os dados persistidos em um banco PostgreSQL.

## Como o projeto foi feito
- **Arquitetura:** Modelo cliente-servidor. O frontend (React) faz requisições para o backend (Node.js) que gerencia as informações no banco de dados.
- **Frontend:** Desenvolvido com React, Vite e Axios. Utiliza React-Toastify para feedbacks visuais de sucesso e erro.
- **Backend:** Node.js com Express, estruturado com rotas e controladores para garantir a separação de responsabilidades.
- **Banco de Dados:** PostgreSQL rodando via Docker para garantir que o ambiente seja o mesmo em qualquer máquina.

## Pré-requisitos
Antes de começar, você precisa ter instalado:
- **Node.js** (versão 18 ou superior)
- **Docker** e **Docker Compose**

## Como rodar o projeto na sua máquina

### 1. Subir o ambiente (Docker)
Na pasta raiz do projeto, execute o comando para subir o container do banco de dados:
```bash
docker-compose up -d
```

### 2. Configurar o Backend

Entre na pasta `/backend`:

1.  Instale as dependências: `npm install`
2.  Crie o arquivo `.env` baseado no `.env.example` presente na pasta.
3.  Inicie o servidor: `npm run dev`

### 3. Configurar o Frontend

Entre na pasta `/frontend`:

1.  Instale as dependências: `npm install`
2.  Inicie a aplicação: `npm run dev`

### Testes Unitários

O projeto possui testes unitários implementados com Jest, conforme solicitado no desafio.
Para rodar os testes, acesse a pasta `/backend` e execute:

```bash
npm test
```

## Exemplos de Chamadas à API

Endpoints disponíveis para teste (via Insomnia, Postman ou curl):

  - **Criar Tarefa (POST /tasks):**



```json
{
  "title": "Estudar React",
  "description": "Praticar hooks e componentes"
}
```

  - **Listar Tarefas (GET /tasks):** Retorna a lista completa de tarefas em formato JSON.

-----

## Contato

Se tiver alguma dúvida sobre o código ou a implementação, pode me chamar:

  - **E-mail:** muelleraugusto21@gmail.com
  - **LinkedIn:** www.linkedin.com/in/augusto-mueller-wendt-0074bb272

Desenvolvido por **Augusto**.

