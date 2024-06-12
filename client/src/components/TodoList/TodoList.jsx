import { useState } from "react";

const TodoList = ({ values, handleDelete, handleUpdate }) => {
  const [editingTodo, setEditingTodo] = useState(null);
  const [editValue, setEditValue] = useState("");

  const startEditing = (todo) => {
    setEditingTodo(todo.id);
    setEditValue(todo.title);
  };

  const saveEdit = (id) => {
    handleUpdate(id, editValue);
    setEditingTodo(null);
    setEditValue("");
  };

  return (
      <ul>
        {values.map(todo => (
            <li key={todo.id}>
              {editingTodo === todo.id ? (
                  <div>
                    <input
                        type="text"
                        value={editValue}
                        onChange={(e) => setEditValue(e.target.value)}
                    />
                    <button onClick={() => saveEdit(todo.id)}>Save</button>
                    <button onClick={() => setEditingTodo(null)}>Cancel</button>
                  </div>
              ) : (
                  <div>
                    {todo.title}
                    <button onClick={() => startEditing(todo)}>Edit</button>
                    <button onClick={() => handleDelete(todo.id)}>Delete</button>
                  </div>
              )}
            </li>
        ))}
      </ul>
  );
};

export default TodoList;