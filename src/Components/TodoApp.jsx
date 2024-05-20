import { List } from "./list";
import { Addtodo } from "./addtodo";
import { useTodo } from "../Hooks/useTodo";

export const TodoApp = () => {
    const { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo, countTodos, countPendingTodos } = useTodo();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-3xl font-bold mb-4 text-center">TodoApp: {countTodos}, Pendiente: {countPendingTodos}</h1>
            <hr className="w-full mb-4" />
            <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-screen-lg">
                <div className="md:w-7/12 mb-4 md:mb-0">
                    <List todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo} />
                </div>
                <div className="md:w-5/12">
                    <Addtodo handleNewTodo={handleNewTodo} />
                </div>
            </div>
        </div>

    );
};

