import React from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import './TodoList.css';

function TodoItem({ todo, onDelete, onStatusChange, nextStatus, nextLabel, onRecover, onPermanentlyDelete, showRecoverButtons }) 
{
  return (
    <li className="todo-item">
      <Typography className={`todo-text ${todo.status === 'completed' ? 'completed' : ''}`}>
        {todo.text}
      </Typography>

      {showRecoverButtons ? (
        <>
          {/* Recover Button */}
          <button onClick={() => onRecover(todo.id)} className="recover-btn">
            Recover
          </button>

          {/* Permanently Delete Button */}
          <IconButton aria-label="delete" onClick={() => onPermanentlyDelete(todo.id)} className="delete-btn">
            <DeleteIcon />
          </IconButton>
        </>
      ) : (
        <>
          {nextStatus && (
            <button onClick={() => onStatusChange(todo.id, nextStatus)} className="status-button">
              {nextLabel}
            </button>
          )}
          
          <IconButton aria-label="delete" onClick={() => onDelete(todo.id)} className="delete-btn">
            <DeleteIcon />
          </IconButton>
        </>
      )}
    </li>
  );
}

export default function TodoList({ todos, onStatusChange, onDelete, nextStatus, nextLabel, onRecover, onPermanentlyDelete, showRecoverButtons }) 
{
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          onStatusChange={onStatusChange}
          onDelete={onDelete}
          nextStatus={nextStatus}
          nextLabel={nextLabel}
          onRecover={onRecover}
          onPermanentlyDelete={onPermanentlyDelete}
          showRecoverButtons={showRecoverButtons}
        />
      ))}
    </ul>
  );
}
