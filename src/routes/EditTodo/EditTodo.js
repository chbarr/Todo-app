import React, { useEffect, useState } from 'react'
import { useTodos } from '../useTodos'
import { useLocation, useNavigate, useParams } from 'react-router-dom';

function EditTodo() {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    const { editTodo, getTodo, loading } = useTodos();
    const [newTodoText, setNewTodoText] = useState(location.state?.todoText || '');
    const todoId = Number(params.id);

    useEffect(() => {
        if (!loading) {
            setNewTodoText(getTodo(todoId).text);
        }
    }, [loading])

    if (loading && !location.state?.todoText) {
        return <p>Cargando ...</p>
    }
    else {
        return (
            <>
                <label>Edita tu Todo</label>
                <textarea
                    value={newTodoText}
                    onChange={(event) => {
                        setNewTodoText(event.target.value);
                    }}
                />
                <button onClick={() => {
                    editTodo(todoId, newTodoText);
                    navigate("/")
                }}>
                    Guardar
                </button>

                <button onClick={() => navigate("/")}>
                    Cancelar
                </button>
            </>
        );
    }
}

export { EditTodo }