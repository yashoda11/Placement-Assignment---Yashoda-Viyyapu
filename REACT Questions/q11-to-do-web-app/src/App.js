import React, { useReducer, useState } from 'react';
import './App.css';

// Initial state for todos
const initialState = [];

// Reducer function to manage state updates
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.payload }];
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      );
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
};

const App = () => {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [todoText, setTodoText] = useState('');

  const handleInputChange = event => {
    setTodoText(event.target.value);
  };

  const addTodo = event => {
    event.preventDefault();
    if (todoText.trim() !== '') {
      dispatch({ type: 'ADD_TODO', payload: todoText });
      setTodoText('');
    }
  };

  const toggleTodo = id => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };

  const deleteTodo = id => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  };

  return (
    <div className="App">
      <h1>Todo Web App Using REACT</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Enter a task"
          value={todoText}
          onChange={handleInputChange}
        />
        <button type="submit" className='btn'>Add</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;