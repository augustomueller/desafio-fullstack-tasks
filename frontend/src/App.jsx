import { useEffect, useState } from 'react'
import api from './services/api'
import './styles/App.css' // Importando o arquivo que criamos!

function App() {
  const [tasks, setTasks] = useState([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const loadTasks = async () => {
    try {
      const response = await api.get('/tasks')
      setTasks(response.data)
    } catch (err) { console.error(err) }
  }

  useEffect(() => { loadTasks() }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!title) return
    await api.post('/tasks', { title, description })
    setTitle(''); setDescription(''); loadTasks()
  }

  const toggleTask = async (id, completed) => {
    await api.patch(`/tasks/${id}`, { completed: !completed })
    loadTasks()
  }

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`)
    loadTasks()
  }

  return (
    <div className="container">
      <div className="content">
        <h1 className="title">Minhas Tarefas</h1>
        
        <form className="task-form" onSubmit={handleSubmit}>
          <input 
            placeholder="Título da tarefa" 
            value={title} 
            onChange={e => setTitle(e.target.value)} 
          />
          <input 
            placeholder="Descrição" 
            value={description} 
            onChange={e => setDescription(e.target.value)} 
          />
          <button className="btn-add" type="submit">Adicionar Tarefa</button>
        </form>

        <div className="task-list">
          {tasks.map(task => (
            <div key={task.id} className={`task-card ${task.completed ? 'completed' : 'pending'}`}>
              <div className={`task-info ${task.completed ? 'done' : ''}`}>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
              </div>
              <div className="actions">
                <button className="btn-action" onClick={() => toggleTask(task.id, task.completed)}>
                  {task.completed ? '🔄' : '✅'}
                </button>
                <button className="btn-action" onClick={() => deleteTask(task.id)}>
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App