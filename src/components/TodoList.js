import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadTodos, toggleTodo, editTodo, deleteTodo, clearTodos } from '../store/slice';
import Todo from './Todo';
import data from '../data.json';

const TodoList = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadTodos(data));
    }, [dispatch]);

    const handleClear = () => {
        dispatch(clearTodos());
    }

    return (
        <div>
            {todos.map(todo => (
                <Todo
                    key={todo.id}
                    todo={todo}
                    onToggle={id => dispatch(toggleTodo(id))}
                    onEdit={(id, text) => dispatch(editTodo({ id, text }))}
                    onDelete={id => dispatch(deleteTodo(id))}
                />
            ))}
            <div className="bottom-block">
                Всего задач: {todos.length}
                {todos.length !== 0 && <a className="btn-clear" onClick={handleClear}>Очистить</a>}
            </div>
        </div>
    );
};

export default TodoList;