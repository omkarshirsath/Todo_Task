import React from "react";

interface TodoListProps {
  listTodo: string[];
  deleteTask: (index: number) => void; // Function to delete tasks
}

const TodoList: React.FC<TodoListProps> = ({ listTodo, deleteTask }) => {
  return (
    <ul className="todo-list">
      {listTodo.length === 0 ? (
        <p className="empty-message">No tasks added yet!</p>
      ) : (
        listTodo.map((todo, index) => (
          <li className="list-item" key={index}>
            <span>{todo}</span>
            <button className="delete-btn" onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))
      )}
    </ul>
  );
};

export default TodoList;
