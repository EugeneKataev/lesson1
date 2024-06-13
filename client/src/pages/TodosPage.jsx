import axios from "axios";
import { useEffect, useState } from "react";
import { API_TODOS, API_URL } from "../urls";
import { Formik, Field, Form } from "formik";
import TodoList from "../components/TodoList/TodoList";

export default function TodosPage({ token, handleSignOut }) {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const result = await axios.get(API_URL + API_TODOS, {
                    headers: {
                        'Authorization': `Token ${token}`
                    }
                });
                console.log(result);
                setTodos(result.data);
            } catch (error) {
                console.error("Error fetching todos", error);
            }
        };

        fetchTodos();
    }, [token]);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${API_URL + API_TODOS}/${id}`, {
                headers: { 'Authorization': `Token ${token}` }
            });
            setTodos(todos.filter(todo => todo.id !== id));
        } catch (error) {
            console.error("Error deleting todo", error);
        }
    };

    const handleUpdate = async (id, title) => {
        try {
            const { data } = await axios.put(`${API_URL + API_TODOS}/${id}`, { title }, {
                headers: { 'Authorization': `Token ${token}` }
            });
            setTodos(todos.map(todo => (todo.id === id ? data : todo)));
        } catch (error) {
            console.error("Error updating todo", error);
        }
    };

    return (
        <div>
            <h2>Todos Page</h2>
            <button onClick={handleSignOut}>Sign Out</button> {}
            {!todos.length && (<p>No todos available</p>)}

            {!!todos.length && <TodoList values={todos} handleDelete={handleDelete} handleUpdate={handleUpdate} />} {/*new code*/}

            <Formik
                initialValues={{ value: '' }}
                onSubmit={async (values, { resetForm }) => {
                    try {
                        const { data } = await axios.post(API_URL + API_TODOS, {
                            title: values.value
                        }, {
                            headers: {
                                'Authorization': `Token ${token}`
                            }
                        });
                        console.log(data);
                        setTodos([...todos, { title: data.title, id: data.id }]);
                        resetForm();
                    } catch (error) {
                        console.error("Error adding todo", error);
                    }
                }}
            >
                <Form>
                    <Field name="value" placeholder="Enter new todo value" />
                    <input type="submit" value="Save" />
                </Form>
            </Formik>
        </div>
    );
}