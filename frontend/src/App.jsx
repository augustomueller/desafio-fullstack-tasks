import { useEffect, useState } from 'react'
import api from './services/api'
import './styles/App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [tasks, setTasks] = useState([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const loadTasks = async () => {
    try {
      const response = await api.get('/tasks')
      setTasks(response.data)
    } catch (err) {
      toast.error("Erro ao carregar tarefas!");
    }
  }

  useEffect(() => { loadTasks() }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!title.trim()) return

    try {
      await api.post('/tasks', { title, description })
      setTitle('')
      setDescription('')
      loadTasks()
      toast.success("Tarefa adicionada.");
    } catch (err) {
      toast.error("Erro ao salvar tarefa.");
    }
  }

  const toggleTask = async (id, completed) => {
    try {
      await api.patch(`/tasks/${id}`, { completed: !completed })
      loadTasks()
      if (!completed) {
        toast.info("Tarefa concluída");
      }
    } catch (err) {
      toast.error("Erro ao atualizar.");
    }
  }

  const deleteTask = async (id) => {
    try {
      await api.delete(`/tasks/${id}`)
      loadTasks()

      toast.warn("Tarefa removida.");
    } catch (err) {
      toast.error("Erro ao deletar.");
    }
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

          <button
            className="btn-add"
            type="submit"
            disabled={!title.trim()}
            style={{
              opacity: !title.trim() ? 0.5 : 1,
              cursor: !title.trim() ? 'not-allowed' : 'pointer'
            }}
          >
            Adicionar Tarefa
          </button>
        </form>

        <div className="task-list">

          {tasks.length === 0 && (
            <div style={{ textAlign: 'center', marginTop: '40px', color: '#718096' }}>
              <p style={{ fontSize: '50px', margin: 0 }}>Adicione algo</p>
              <p>Sua lista está limpa</p>
            </div>
          )}

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


      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  )
}

export default App