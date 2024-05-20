import { List } from "./list";
import { Addtodo } from "./addtodo";
import { useTodo } from "../Hooks/useTodo";

export const TodoApp = () => {
    const { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo, countTodos, countPendingTodos } = useTodo();

    return (
        <>
            <h1><strong>TodoApp: {countTodos},</strong> <small>Pendiente: {countPendingTodos}</small></h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <List todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo} />
                </div>
                <div className="col-5">
                    <Addtodo handleNewTodo={handleNewTodo} />
                </div>
            </div>
        </>
    );
};