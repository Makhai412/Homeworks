import { useReducer, useEffect } from "react";
import { TodoReducer } from "../Components/TodoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodo = () => {
    const [todos, dispatch] = useReducer(TodoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleNewTodo = (todo) => {
        dispatch({ type: '[TODO] ADD TODO', payload: todo });
        
    };

    const handleDeleteTodo = (id) => {
        dispatch({ type: '[TODO] DELETE TODO', payload: id });
    };

    const handleToggleTodo = (id) => {
        dispatch({ type: '[TODO] TOGGLE TODO', payload: id });
    };

    const countTodos = todos.length;
    const countPendingTodos = todos.filter(todo => !todo.done).length;

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        countTodos,
        countPendingTodos
    };
};
