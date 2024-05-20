import { TodoItem } from './todoItem';

export const List = ({ todos, onDeleteTodo, onToggleTodo }) => {
    return (
        <ul className="list-group flex flex-col items-center">
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onDeleteTodo={onDeleteTodo}
                    onToggleTodo={onToggleTodo}
                />
            ))}
        </ul>
    );
};