import { useEffect, useState } from 'react'
import api from './services/api'

function App() {
  const [tasks, setTasks] = useState([])

  // Função para buscar tarefas do Backend
  const loadTasks = async () => {
    try {
      const response = await api.get('/tasks')
      setTasks(response.data)
    } catch (error) {
      console.error("Erro ao carregar tarefas:", error)
    }
  }

  // Executa quando a página abre
  useEffect(() => {
    loadTasks()
  }, [])

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Minhas Tarefas</h1>
      
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <strong>{task.title}</strong> - {task.completed ? '✅' : '⏳'}
            <p>{task.description}</p>
          </li>
        ))}
      </ul>

      {tasks.length === 0 && <p>Nenhuma tarefa encontrada.</p>}
    </div>
  )
}

export default App