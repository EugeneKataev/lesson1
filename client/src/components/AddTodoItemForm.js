import axios from "axios";
import { Formik, Field, Form } from "formik";
import { useState } from "react";
import { API_TODOS, API_URL } from "../urls";

const AddTodoItemForm = ({ token, todos, setTodos }) => {
    const [error, setError] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    return (
        <Formik
            initialValues={{ value: "" }}
            onSubmit={async (values, { resetForm }) => {
                setIsSubmitting(true);
                try {
                    const { data } = await axios.post(
                        `${API_URL}${API_TODOS}`,
                        { title: values.value },
                        {
                            headers: {
                                Authorization: `Token ${token}`,
                            },
                        }
                    );
                    setTodos([...todos, { title: data.title, id: data.id }]);
                    resetForm();
                    setError(null);
                } catch (error) {
                    setError("Error adding todo");
                    console.error("Error adding todo", error);
                } finally {
                    setIsSubmitting(false);
                }
            }}
        >
            {() => (
                <Form>
                    <div className="todo-bottom">
                        <Field name="value" placeholder="Enter new todo value" />
                        <input type="submit" value="Save" disabled={isSubmitting} />
                        {error && <p>{error}</p>} {}
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default AddTodoItemForm;