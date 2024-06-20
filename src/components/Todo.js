import React, { useState, useRef, useEffect } from 'react';

const Todo = ({ todo, onToggle, onEdit, onDelete }) => {

    const [editing, setEditing] = useState(false);
    const [editText, setEditText] = useState(todo.text);
    const inputRef = useRef(null);


    const CancelTodo = () => {
        setEditing(false);
        setEditText(todo.text);
    };

    const SaveTodo = () => {
        onEdit(todo.id, editText);
        setEditing(false);
    };

    useEffect(() => {
        if (editing) {
            inputRef.current.focus();
        }
    }, [editing]);

    return (
        <div className="todo-main-block">
            <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)}/>
            {editing ? (
                <div>
                  <input type="text" ref={inputRef} value={editText} onChange={(e) => {setEditText(e.target.value)}} />
                    <a onClick={CancelTodo}>Отменить</a>
                  <a onClick={SaveTodo}>Сохранить</a>
                </div>
            ) : (
                <div>
                  <span>{todo.text}</span>
                    <a onClick={() => onDelete(todo.id)}>Удалить</a>
                  <a onClick={()=>{setEditing(true)}}>Редактировать</a>
                </div>
            )}
        </div>
    );
};

export default Todo;