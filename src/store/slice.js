import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        loadTodos: (state, action) => {
            return action.payload;
        },
        addTodo: (state, action) => {
            state.push({
                id: action.payload.id,
                text: action.payload.text,
                completed: false
            });
        },
        toggleTodo: (state, action) => {
            const todo = state.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        editTodo: (state, action) => {
            const todo = state.find(todo => todo.id === action.payload.id);
            if (todo) {
                todo.text = action.payload.text;
            }
        },
        deleteTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload);
        },
        clearTodos: () => {
            return [];
        }
    }
});

export const { addTodo, toggleTodo, editTodo, deleteTodo, loadTodos, clearTodos } = todoSlice.actions;
export default todoSlice.reducer;