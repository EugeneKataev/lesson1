import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/slice';

const AddTodo = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleInputChange = event => {
        setText(event.target.value);
    };

    const handleAddTodo = () => {
        if (text.trim() !== '') {
            dispatch(addTodo({
                id: Date.now(),
                text: text.trim()
            }));
            setText('');
        }
    };

    return (
        <div className="todo-head">
            <div className="todo-head-block">
                <input type="text" value={text} onChange={handleInputChange} />
                <a onClick={handleAddTodo}>+</a>
            </div>
        </div>
    );
};

export default AddTodo;