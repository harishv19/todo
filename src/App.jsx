import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [filter, setFilter] = useState('all');

  const addTodo = () => {
    if (!taskName) return;
    const newTodo = { taskName, description, status: 'not completed' };
    setTodos([...todos, newTodo]);
    setTaskName('');
    setDescription('');
  };

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const updateStatus = (index, status) => {
    const newTodos = [...todos];
    newTodos[index].status = status;
    setTodos(newTodos);
  };

  const filterTodos = status => {
    setFilter(status);
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') {
      return todo.status === 'completed';
    } else if (filter === 'not completed') {
      return todo.status === 'not completed';
    } else {
      return true;
    }
  });

  return (
    <div className="container">
      <h1>Todo App</h1>
      <div className="form">
        <input
          type="text"
          value={taskName}
          onChange={e => setTaskName(e.target.value)}
          placeholder="Task Name"
        />
        <input
          type="text"
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Description"
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <div className="filter">
        Filter:
        <select value={filter} onChange={e => filterTodos(e.target.value)}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="not completed">Not Completed</option>
        </select>
      </div>
      <div className="todos">
        {filteredTodos.map((todo, index) => (
          <div key={index} className={`todo-card ${todo.status}`}>
            <h3>{todo.taskName}</h3>
            <p>{todo.description}</p>
            <p>Status: {todo.status}</p>
            <button onClick={() => updateStatus(index, 'completed')}>Complete</button>
            <button onClick={() => updateStatus(index, 'not completed')}>Incomplete</button>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoApp;


