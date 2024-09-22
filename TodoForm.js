import React, { useState } from 'react';
import './TodoForm.css';

function TodoForm({ onSubmit }) {
  const [input, setInput] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (input.trim()) {
      onSubmit(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Add a new todo"
        className="todo-input"
      />
      <button className="todo-button">Add</button>
    </form>
  );
}

export default TodoForm;
