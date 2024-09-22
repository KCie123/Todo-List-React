import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './App.css';

function App() 
{
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [deletedTodos, setDeletedTodos] = useState(() => {
    const savedDeletedTodos = localStorage.getItem('deletedTodos');
    return savedDeletedTodos ? JSON.parse(savedDeletedTodos) : [];
  });

  // Save tasks to localStorage when state changes
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('deletedTodos', JSON.stringify(deletedTodos));
  }, [todos, deletedTodos]);

  // Add a new task
  const addTodo = (text) => 
  {
    const newTodos = [...todos, {
      id: Date.now(),
      text,
      status: 'pending' // Default status
    }];
    setTodos(newTodos);
  };

  // Update task status
  const updateTodoStatus = (id, status) => 
  {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, status } : todo
    ));
  };

  // Move task to recently deleted
  const deleteTodo = (id) => 
  {
    const taskToDelete = todos.find(todo => todo.id === id);
    setTodos(todos.filter(todo => todo.id !== id));
    setDeletedTodos([...deletedTodos, taskToDelete]);
  };

  // Recover a deleted task
  const recoverTodo = (id) => 
  {
    const taskToRecover = deletedTodos.find(todo => todo.id === id);
    setDeletedTodos(deletedTodos.filter(todo => todo.id !== id));
    setTodos([...todos, taskToRecover]);
  };

  // Permanently delete a task
  const permanentlyDeleteTodo = (id) => 
  {
    setDeletedTodos(deletedTodos.filter(todo => todo.id !== id));
  };

  const renderPlaceholder = (section) => 
  {
    return <div className="empty-placeholder">No {section} tasks</div>;
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Todo List with Recently Deleted</h1>
      
      {/* Pending Section */}
      <div className="todo-section">
        <h2>Pending</h2>
        {todos.filter(todo => todo.status === 'pending').length > 0 ? (
          <TodoList 
            todos={todos.filter(todo => todo.status === 'pending')} 
            onStatusChange={updateTodoStatus}
            onDelete={deleteTodo}
            nextStatus="inProgress"
            nextLabel="Start"
          />
        ) : renderPlaceholder("Pending")}
      </div>

      {/* In Progress Section */}
      <div className="todo-section">
        <h2>In Progress</h2>
        {todos.filter(todo => todo.status === 'inProgress').length > 0 ? (
          <TodoList 
            todos={todos.filter(todo => todo.status === 'inProgress')} 
            onStatusChange={updateTodoStatus}
            onDelete={deleteTodo}
            nextStatus="completed"
            nextLabel="Finish"
          />
        ) : renderPlaceholder("In Progress")}
      </div>

      {/* Completed Section */}
      <div className="todo-section">
        <h2>Completed</h2>
        {todos.filter(todo => todo.status === 'completed').length > 0 ? (
          <TodoList 
            todos={todos.filter(todo => todo.status === 'completed')} 
            onStatusChange={updateTodoStatus}
            onDelete={deleteTodo}
            nextStatus={null}  // No next status for completed tasks
            nextLabel=""
          />
        ) : renderPlaceholder("Completed")}
      </div>

      {/* Recently Deleted Section */}
      <div className="todo-section">
        <h2>Recently Deleted</h2>
        {deletedTodos.length > 0 ? (
          <TodoList 
            todos={deletedTodos} 
            onRecover={recoverTodo} // Add recover functionality
            onPermanentlyDelete={permanentlyDeleteTodo} // Add permanent delete functionality
            showRecoverButtons={true} // Show Recover buttons
          />
        ) : renderPlaceholder("Recently Deleted")}
      </div>

      <TodoForm onSubmit={addTodo} />
    </div>
  );
}

export default App;
