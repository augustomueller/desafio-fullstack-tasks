# To-Do List Fullstack | Desafio SellFlux

Projeto de uma lista de tarefas desenvolvido para o processo seletivo da SellFlux. O sistema permite criar, listar, marcar como concluído e excluir tarefas, com os dados salvos em um banco PostgreSQL.

## Como o projeto foi feito
- **Arquitetura:** Modelo cliente-servidor. O frontend (React) faz requisições para o backend (Node.js) que gerencia as informações no banco de dados.
- **Frontend:** Desenvolvido com React, Vite e Axios. Usei a biblioteca Toastify para mostrar os avisos de sucesso ou erro.
- **Backend:** Node.js com Express para as rotas da API.
- **Banco de Dados:** PostgreSQL rodando em um container Docker para facilitar a configuração do ambiente.

## O que eu utilizei:
- **Frontend:** React + Vite e Axios para as chamadas na API.
- **Backend:** Node.js com Express.
- **Banco de Dados:** PostgreSQL rodando via Docker.
- **Estilização:** CSS focado na identidade visual da SellFlux (roxo e cards arredondados) e Toastify para os alertas de sucesso/erro.

## Pré-requisitos
Antes de começar, você vai precisar ter instalado:
- **Node.js** (versão 18 ou superior)
- **Docker** e **Docker Compose**

## Como rodar o projeto na sua máquina:

### 1. Subir o Banco de Dados (Docker)
Na pasta raiz do projeto, rode o comando para subir o container do banco:
```bash
docker-compose up -d
```

### 2. Configurar o Backend
Entre na pasta `/backend`:
1. Instale as dependências: `npm install`
2. Crie um arquivo `.env` baseado no `.env.example`.
3. Inicie o servidor: `npm run dev`

### 3. Configurar o Frontend
Entre na pasta `/frontend`:
1. Instale as dependências: `npm install`
2. Inicie a aplicação: `npm run dev`

---

Contato
Se tiver alguma dúvida sobre o código, pode me chamar:

E-mail: muelleraugusto21@gmail.com

LikedIn: www.linkedin.com/in/augusto-mueller-wendt-0074bb272

Desenvolvido por Augusto.
```
