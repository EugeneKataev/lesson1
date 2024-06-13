import axios from "axios";
import { useEffect, useState } from "react";
import { API_TODOS, API_URL } from "../urls";
import TodoList from "../components/TodoList/TodoList";
import AddTodoItemForm from "../components/AddTodoItemForm";

export default function TodosPage({ token, handleSignOut }) {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const result = await axios.get(API_URL + API_TODOS, {
                    headers: {
                        Authorization: `Token ${token}`,
                    },
                });
                console.log(result);
                setTodos(result.data);
            } catch (error) {
                console.error("Error fetch todos", error);
            }
        };

        fetchTodos();
    }, [token]);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${API_URL + API_TODOS}/${id}`, {
                headers: { Authorization: `Token ${token}` },
            });
            setTodos(todos.filter((todo) => todo.id !== id));
        } catch (error) {
            console.error("Error del todo", error);
        }
    };

    const handleUpdate = async (id, title) => {
        try {
            const { data } = await axios.put(
                `${API_URL + API_TODOS}/${id}`,
                { title },
                {
                    headers: { Authorization: `Token ${token}` },
                }
            );
            setTodos(todos.map((todo) => (todo.id === id ? data : todo)));
        } catch (error) {
            console.error("Error upd todo", error);
        }
    };

    return (
        <div className="todo-list">
            <div className="head">
                <h2>Todos Page</h2>
                <button onClick={handleSignOut}>Sign Out</button>
            </div>
            {!todos.length && <p>No todos available</p>}
            {!!todos.length && (
                <TodoList values={todos} handleDelete={handleDelete} handleUpdate={handleUpdate} />
            )}
            <AddTodoItemForm token={token} todos={todos} setTodos={setTodos} /> {}
        </div>
    );
}